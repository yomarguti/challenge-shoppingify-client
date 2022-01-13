import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-row h-screen">
      <Head>
        <title>Shoppingify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-between pt-3 pb-5 w-14">
        <div>
          <img src="/logo.svg" alt="logo" />
        </div>
        <nav className="w-full text-icons-gray">
          <ul className="w-full space-y-6">
            <li className="grid w-full py-4 border-l-4 border-primary place-items-center">
              <span className="material-icons">list</span>
            </li>
            <li className="grid w-full py-4 border-l-4 border-white place-items-center">
              <span className="material-icons">replay</span>
            </li>
            <li className="grid w-full py-4 border-l-4 border-white place-items-center">
              <span className="material-icons">insert_chart_outlined</span>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-center p-1 rounded-full bg-primary w-9 h-9">
          <span className="text-white material-icons">shopping_cart</span>
        </div>
      </div>
      <main className="flex flex-col w-full bg-lightbg-gray"></main>
    </div>
  );
}
