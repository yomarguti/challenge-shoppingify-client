import useItemList from "../hooks/useItemList";

interface Item {
  id: number;
  title: string;
}

interface CategoryProps {
  name: string;
  items: Item[];
}

interface ItemElementProps {
  title: string;
}

const ItemList = () => {
  const { itemsByCategories, isLoading, isError } = useItemList();

  return (
    <main className="flex flex-col w-full px-3 py-8 space-y-6 overflow-scroll bg-lightbg-gray">
      {isLoading && (
        <div>
          <h4>Loading...</h4> <span className="material-icon">cached</span>
        </div>
      )}
      {itemsByCategories?.map(({ name, items, id }) => {
        return <Category name={name} items={items} key={id} />;
      })}
    </main>
  );
};

const Category = ({ name, items }: CategoryProps) => {
  return (
    <section>
      <h4 className="text-lg font-bold tracking-wide">{name}</h4>
      <ul className="grid grid-cols-2 pt-5 gap-x-2 gap-y-4">
        {items.map((it) => (
          <ItemElement title={it.title} key={it.id} />
        ))}
      </ul>
    </section>
  );
};

const ItemElement = ({ title }: ItemElementProps) => {
  return (
    <li className="flex flex-row justify-between px-3 py-3 tracking-tight bg-white shadow-md rounded-xl">
      <p>{title}</p>
      <span className="material-icons text-light-gray">add</span>
    </li>
  );
};

export default ItemList;
