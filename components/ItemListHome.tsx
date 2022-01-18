import Header from "./Header";
import ItemList from "./ItemList";

interface ItemListHomeProps {
  hide?: boolean;
}

export default function ItemListHome({ hide }: ItemListHomeProps) {
  return (
    <div
      className={`${
        hide && "hidden"
      } w-full px-3 overflow-y-auto bg-lightbg-gray md:px-10`}
    >
      <Header />
      <ItemList />
    </div>
  );
}
