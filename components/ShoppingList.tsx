import { useContext } from "react";
import { Item, ShoplistItem } from "../app";
import { AppContext } from "../context/context";
import { Actions } from "../context/reducers";

const dummyShList = [
  {
    id: 1,
    name: "Fruit and vegetables",
    items: [
      {
        id: 1,
        title: "Avocado",
        quantity: 3,
      },
      {
        id: 2,
        title: "Pre-cooked corn 450g",
        quantity: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Meat and fish",
    items: [
      {
        id: 3,
        title: "Chiken 1kg",
        quantity: 3,
      },
      {
        id: 4,
        title: "Pork fillets 450g",
        quantity: 1,
      },
      {
        id: 5,
        title: "Salmon 1kg",
        quantity: 1,
      },
      {
        id: 6,
        title: "Chiken leg box",
        quantity: 1,
      },
    ],
  },
];

interface ItemInShoppingList extends Partial<Item> {
  id: number;
  title: string;
  quantity: number;
}

interface CategoryProps {
  name: string;
  items: ShoplistItem[];
}

interface ItemElementProps {
  title: string;
  quantity: number;
}

const ShoppingList = (): JSX.Element => {
  const {
    dispatch,
    state: { shoppingList },
  } = useContext(AppContext);

  const itemListByCategories = shoppingList.reduce((acc, current) => {
    const value = current["categoryName"];
    acc[value] = (acc[value] || []).concat(current);
    return acc;
  }, {} as Record<string, ShoplistItem[]>);

  return (
    <div className="relative flex flex-col w-full h-full py-5 bg-primary-light">
      <div className="relative flex flex-row justify-end px-2 py-3 mx-5 rounded-2xl bg-violet">
        <div className="absolute -top-3 left-3 w-14">
          <img src="/source.svg" alt="Bottle" />
        </div>
        <div className="w-3/5">
          <p className="text-sm leading-none text-white">
            Didn't find what you need?
          </p>
          <button
            onClick={() => dispatch({ type: Actions.ShowNewItem })}
            className="px-3 py-1 mt-3 text-xs bg-white rounded-md"
          >
            Add item
          </button>
        </div>
      </div>

      <div className="flex-1 px-5 pt-6 pb-16 overflow-y-auto">
        <div className="flex flex-row justify-between">
          <h4 className="text-xl font-bold">Shopping list</h4>
          <span className="text-lg material-icons">edit</span>
        </div>
        <div>
          {shoppingList.length === 0 ? (
            <h1>Empty list</h1>
          ) : (
            Object.keys(itemListByCategories).map((categoryLabel) => {
              const items = itemListByCategories[categoryLabel];
              return (
                <Category
                  name={categoryLabel}
                  items={items}
                  key={categoryLabel}
                />
              );
            })
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-white">
        <div className="flex flex-row items-center justify-between border-2 rounded-lg border-primary">
          <input
            type="text"
            placeholder="Enter a name"
            className="py-4 pl-3 text-xs focus:outline-none"
          />
          <button className="px-4 py-4 text-sm font-bold text-white rounded-md rounded-r-sm bg-primary">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const Category = ({ name, items }: CategoryProps) => {
  return (
    <div className="flex flex-col pt-6">
      <h5 className="text-sm text-light-gray">{name}</h5>
      <ul>
        {items.map(({ id, name, pieces }) => (
          <ItemElement title={name} quantity={pieces} key={id} />
        ))}
      </ul>
    </div>
  );
};

const ItemElement = ({ title, quantity }: ItemElementProps) => {
  return (
    <li className="flex flex-row items-center justify-between py-2 pr-3 tracking-tight">
      <p className="text-sm font-bold">{title}</p>
      <span className="px-3 py-1 text-xs border-2 rounded-3xl text-primary border-primary">
        {quantity} pcs
      </span>
    </li>
  );
};

export default ShoppingList;
