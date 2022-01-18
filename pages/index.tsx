import Head from "next/head";
import ItemListHome from "../components/ItemListHome";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shoppingify - Items</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ItemListHome />
      </Layout>
    </>
  );
}
