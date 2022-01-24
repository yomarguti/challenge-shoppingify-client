import { useContext } from "react";
import { AppContext } from "../context/context";
import { Actions } from "../context/reducers";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useSWRConfig } from "swr";

export function ItemDetail(): JSX.Element {
  const {
    state: {
      sidebarState: { itemDetails },
    },
    dispatch,
  } = useContext(AppContext);
  const { mutate } = useSWRConfig();

  if (itemDetails === null) return <>Error</>;

  const { id, name, categoryName, note, image } = itemDetails;

  const handleDeleteClick = async (id: number): Promise<void> => {
    try {
      await axios.delete(`${BASE_URL}/items/${id}`);
      mutate(`${BASE_URL}/items`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch({ type: Actions.AddToShoppingList, payload: itemDetails });
    dispatch({ type: Actions.DismissAll });
  };

  return (
    <div className="flex flex-col w-full h-full p-5 overflow-y-auto bg-lightbg-gray">
      <button
        onClick={() => dispatch({ type: Actions.DismissAll })}
        className="flex flex-row mb-6 text-primary"
      >
        <span className="rotate-180 material-icons">arrow_right_alt</span>
        <span>back</span>
      </button>
      <div className={`grid self-center place-items-center min-h-[180px]`}>
        <img
          className="object-cover max-h-44 rounded-3xl"
          src={image}
          alt={name}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between h-full mt-6"
      >
        <div className="space-y-4 ">
          <div className="flex flex-col">
            <label className="text-xs text-light-gray">name</label>
            <p className="mt-1 text-xl font-bold">{name}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-light-gray">category</label>
            <p className="mt-1 text-base font-bold ">{categoryName}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-light-gray">note</label>
            <p className="mt-1 text-sm leading-snug max-h-60">{note}</p>
          </div>
        </div>
        <div className="self-center my-3">
          <button
            onClick={() => handleDeleteClick(id)}
            className="mr-8 font-bold"
          >
            delete
          </button>
          <button
            type="submit"
            className="px-5 py-4 font-bold text-white bg-primary rounded-xl"
          >
            Add to list
          </button>
        </div>
      </form>
    </div>
  );
}
