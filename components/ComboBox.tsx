import { useState } from "react";
import { Category } from "../app";
import useFetchData from "../hooks/useFetchData";

interface ComboBoxProps {
  title: string;
  value: string | Category;
  setCategory: (
    e: React.ChangeEvent<HTMLInputElement> | null,
    category?: Category
  ) => void;
}

export default function ComboBox({
  title,
  value,
  setCategory,
}: ComboBoxProps): JSX.Element {
  const [isListVisible, setIsListVisible] = useState(false);
  const { data: categories } = useFetchData<Category[]>("/categories");

  const handleFocus = (): void => {
    setIsListVisible(true);
  };

  const handleBlur = (): void => {
    setTimeout(() => {
      setIsListVisible(false);
    }, 200);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col pt-2 focus-within:text-primary">
        <label htmlFor="category">{title}</label>
        <input
          value={typeof value === "string" ? value : value.name}
          onChange={setCategory}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
          name="category"
          placeholder="Enter a category"
          className="w-full p-3 mt-1 bg-transparent border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:text-black"
        />
      </div>
      <ul
        className={`${
          isListVisible ? "flex" : "hidden"
        } flex-col w-full p-1 mt-2 bg-white ring-1 ring-gray-200 overflow-y-auto max-h-40 rounded-xl`}
      >
        {categories?.map((category) => (
          <li
            onClick={() => setCategory(null, category)}
            key={category.id}
            className="py-2 pl-4 m-1 rounded-lg even:text-black even:bg-gray-100 odd:text-gray-500 even:font-bold hover:text-primary"
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
