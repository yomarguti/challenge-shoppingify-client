import Head from "next/head";
import Header from "../components/Header";
import ItemList from "../components/ItemList";
import Menu from "../components/Menu";
import ShoppingList from "../components/ShoppingList";

export default function Home() {
  return (
    <div className="flex flex-row h-screen">
      <Head>
        <title>Shoppingify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div className="w-full px-3 overflow-y-auto bg-lightbg-gray md:px-10">
        <Header />
        <ItemList />
      </div>
      <ShoppingList />
    </div>
  );
}
