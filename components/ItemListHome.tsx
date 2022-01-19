import Header from "./Header";
import ItemList from "./ItemList";

export default function ItemListHome() {
  return (
    <div className="w-full h-full px-3 overflow-y-auto bg-lightbg-gray md:px-10">
      <Header />
      <ItemList />
    </div>
  );
}
