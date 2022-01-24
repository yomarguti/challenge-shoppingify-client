import { useContext } from "react";
import { CategoryWithItems, Item } from "../app";
import { AppContext } from "../context/context";
import { Actions } from "../context/reducers";
import useFetchData from "../hooks/useFetchData";

interface CategoryProps {
  name: string;
  items: Item[];
}

interface ItemElementProps {
  itemData: Item;
}

const ItemList = (): JSX.Element => {
  const {
    data: itemsByCategories,
    isLoading,
    isError,
  } = useFetchData<CategoryWithItems[]>("/items");

  return (
    <div className="flex flex-col w-full py-8 space-y-6 ">
      {isLoading && (
        <div>
          <h4>Loading...</h4> <span className="material-icon">cached</span>
        </div>
      )}
      {itemsByCategories &&
        itemsByCategories.map(({ name, items, id }) => {
          return <Category name={name} items={items} key={id} />;
        })}
    </div>
  );
};

const Category = ({ name, items }: CategoryProps) => {
  return (
    <section>
      <h4 className="text-lg font-bold tracking-wide">{name}</h4>
      <ul className="grid items-start grid-cols-2 pt-5 md:grid-cols-4 gap-x-2 gap-y-4">
        {items.map((it) => {
          it.categoryName = name;
          return <ItemElement itemData={it} key={it.id} />;
        })}
      </ul>
    </section>
  );
};

const ItemElement = ({ itemData }: ItemElementProps) => {
  const { dispatch } = useContext(AppContext);
  return (
    <li
      onClick={() =>
        dispatch({ type: Actions.ShowItemDetails, payload: itemData })
      }
      className="flex flex-row justify-between px-3 py-3 tracking-tight bg-white shadow-md cursor-pointer rounded-xl"
    >
      <p>{itemData.name}</p>
      <span className="material-icons text-light-gray">add</span>
    </li>
  );
};

export default ItemList;
