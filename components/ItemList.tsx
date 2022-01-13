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
    <main className="flex flex-col w-full px-3 py-8 space-y-6 bg-lightbg-gray">
      {itemsByCategories &&
        itemsByCategories.map(({ name, items, id }) => {
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

const ItemElement = (props: ItemElementProps) => {
  return (
    <li className="px-3 py-3 tracking-tight bg-white shadow-md rounded-xl">
      {props.title + "    + "}
    </li>
  );
};

export default ItemList;
