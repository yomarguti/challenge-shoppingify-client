import Head from "next/head";
import ItemList from "../components/ItemList";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div className="flex flex-row h-screen">
      <Head>
        <title>Shoppingify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <ItemList />
    </div>
  );
}
