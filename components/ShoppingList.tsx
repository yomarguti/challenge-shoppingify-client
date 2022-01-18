import { Item } from "../app";

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
  items: ItemInShoppingList[];
}

interface ItemElementProps {
  title: string;
  quantity: number;
}

const ShoppingList = (): JSX.Element => {
  return (
    <aside className="relative flex-col w-full py-8 md:w-96 bg-primary-light lg:flex">
      <div className="relative flex flex-row justify-end px-2 py-3 mx-5 rounded-2xl bg-violet">
        <div className="absolute -top-3 left-3 w-14">
          <img src="/source.svg" alt="Bottle" />
        </div>
        <div className="w-3/5">
          <p className="text-sm leading-none text-white">
            Didn't find what you need?
          </p>
          <button className="px-3 py-1 mt-3 text-xs bg-white rounded-md">
            Add item
          </button>
        </div>
      </div>

      <div className="px-5 pt-6 pb-16 overflow-y-auto">
        <div className="flex flex-row justify-between">
          <h4 className="text-xl font-bold">Shopping list</h4>
          <span className="text-lg material-icons">edit</span>
        </div>
        <div>
          {dummyShList.map(({ id, name, items }) => {
            return <Category name={name} items={items} key={id} />;
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 bg-white">
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
    </aside>
  );
};

const Category = ({ name, items }: CategoryProps) => {
  return (
    <div className="flex flex-col pt-8">
      <h5 className="text-sm text-light-gray">{name}</h5>
      <ul>
        {items.map(({ id, title, quantity }) => (
          <ItemElement title={title} quantity={quantity} key={id} />
        ))}
      </ul>
    </div>
  );
};

const ItemElement = ({ title, quantity }: ItemElementProps) => {
  return (
    <li className="flex flex-row items-center justify-between py-3 pr-3 tracking-tight">
      <p className="text-sm font-bold">{title}</p>
      <span className="px-3 py-1 text-xs border-2 rounded-3xl text-primary border-primary">
        {quantity} pcs
      </span>
    </li>
  );
};

export default ShoppingList;
