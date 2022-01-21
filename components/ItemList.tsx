import { CategoryWithItems, Item } from "../app";
import useFetchData from "../hooks/useFetchData";

interface CategoryProps {
  name: string;
  items: Item[];
}

interface ItemElementProps {
  name: string;
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
        {items.map((it) => (
          <ItemElement name={it.name} key={it.id} />
        ))}
      </ul>
    </section>
  );
};

const ItemElement = ({ name }: ItemElementProps) => {
  return (
    <li className="flex flex-row justify-between px-3 py-3 tracking-tight bg-white shadow-md rounded-xl">
      <p>{name}</p>
      <span className="material-icons text-light-gray">add</span>
    </li>
  );
};

export default ItemList;
