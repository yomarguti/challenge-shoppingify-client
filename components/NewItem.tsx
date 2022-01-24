import React, { useContext, useState } from "react";
import { Actions } from "../context/reducers";
import { Category, Item } from "../app";
import ComboBox from "./ComboBox";
import { BASE_URL } from "../constants";
import { AppContext } from "../context/context";
import axios from "axios";
import { useSWRConfig } from "swr";

interface IState {
  name: string;
  note: string;
  image: string;
  category: {
    name: string;
    id: number | null;
  };
}

const initialState: IState = {
  name: "",
  note: "",
  image: "",
  category: {
    name: "",
    id: null,
  },
};

export default function NewItem(): JSX.Element {
  const { dispatch } = useContext(AppContext);
  const [state, setState] = useState<IState>(initialState);
  const { mutate } = useSWRConfig();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setState({ ...state, [e.target.name]: e.target.value } as {
      [K in keyof IState]: IState[K];
    });
  };

  const setCategory = (
    e: React.ChangeEvent<HTMLInputElement> | null,
    category?: Category
  ): void => {
    if (e) {
      setState({ ...state, category: { name: e.target.value, id: null } });
      return;
    }
    if (category) {
      setState({
        ...state,
        category,
      });
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const category = state.category.id
      ? state.category.id
      : state.category.name;

    await axios.post<Item>(`${BASE_URL}/items`, { ...state, category });

    mutate(`${BASE_URL}/items`);
    setState({ ...initialState });
  };

  return (
    <div className="flex-col w-full h-full p-5 bg-lightbg-gray">
      <h4 className="text-2xl font-bold">Add a new item</h4>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between h-full pt-6"
      >
        <div>
          <div className="flex flex-col pt-2 focus-within:text-primary">
            <label htmlFor="name">Name</label>
            <input
              value={state.name}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter a name"
              required
              className="w-full p-3 mt-1 bg-transparent border-2 border-gray-200 focus:border-primary rounded-xl focus:outline-none focus:text-black"
            />
          </div>
          <div className="flex flex-col pt-2 focus-within:text-primary">
            <label htmlFor="note">Note (optional)</label>
            <textarea
              value={state.note}
              onChange={handleChange}
              name="note"
              placeholder="Enter a note"
              rows={4}
              className="w-full p-3 mt-1 bg-transparent border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:text-black"
            ></textarea>
          </div>
          <div className="flex flex-col pt-2 focus-within:text-primary">
            <label htmlFor="image">Image (optional)</label>
            <input
              type="url"
              name="image"
              value={state.image}
              onChange={handleChange}
              placeholder="Enter a url"
              className="w-full p-3 mt-1 bg-transparent border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:text-black"
            />
          </div>
          <ComboBox
            title="Category"
            value={state.category.name}
            setCategory={setCategory}
          />
        </div>
        <div className="self-center my-3">
          <button
            onClick={() => dispatch({ type: Actions.DismissAll })}
            className="mr-8 font-bold"
          >
            cancel
          </button>
          <button
            type="submit"
            className="px-5 py-4 font-bold text-white bg-primary rounded-xl"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
