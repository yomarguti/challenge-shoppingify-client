import { useContext } from "react";
import { AppContext } from "../context/context";
import { Actions } from "../context/reducers";

export default function NewItem(): JSX.Element {
  const { dispatch } = useContext(AppContext);

  return (
    <aside className="relative flex-col w-full px-5 pt-6 pb-5 md:w-96 lg:flex bg-lightbg-gray">
      <h4 className="text-2xl font-bold">Add a new item</h4>
      <form className="flex flex-col justify-between h-full pt-6">
        <div>
          <div className="flex flex-col pt-2 focus-within:text-primary">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter a name"
              className="w-full p-3 mt-1 bg-transparent border-2 border-gray-200 focus:border-primary rounded-xl focus:outline-none focus:text-black"
            />
          </div>
          <div className="flex flex-col pt-2 focus-within:text-primary">
            <label htmlFor="note">Note (optional)</label>
            <textarea
              name="note"
              placeholder="Enter a note"
              rows={4}
              className="w-full p-3 mt-1 bg-transparent border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:text-black"
            ></textarea>
          </div>
          <div className="flex flex-col pt-2 focus-within:text-primary">
            <label htmlFor="image">Image (optional)</label>
            <input
              type="text"
              name="image"
              placeholder="Enter a url"
              className="w-full p-3 mt-1 bg-transparent border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:text-black"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col pt-2 focus-within:text-primary">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                placeholder="Enter a category"
                className="w-full p-3 mt-1 bg-transparent border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:text-black"
              />
            </div>
            <ul className="flex flex-col w-full p-1 mt-2 bg-white border border-gray-200 rounded-xl">
              <li className="py-2 pl-4 m-1 rounded-lg even:text-black even:bg-gray-400 odd:text-gray-500 even:font-bold hover:text-primary">
                Fruit and vegetables
              </li>
              <li className="py-2 pl-4 m-1 rounded-lg even:text-black even:bg-gray-100 odd:text-gray-500 even:font-bold hover:text-primary">
                Meat and fish
              </li>
              <li className="py-2 pl-4 m-1 rounded-lg even:text-black even:bg-gray-100 odd:text-gray-500 even:font-bold hover:text-primary">
                Beverages
              </li>
            </ul>
          </div>
        </div>
        <div className="self-center mt-3">
          <button
            onClick={() => dispatch({ type: Actions.DismissAll })}
            className="mr-8 font-bold"
          >
            cancel
          </button>
          <button className="px-5 py-4 font-bold text-white bg-primary rounded-xl">
            Save
          </button>
        </div>
      </form>
    </aside>
  );
}
