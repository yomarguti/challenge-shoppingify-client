import { useContext, useState } from "react";
import { Item, ShoplistItem } from "../app";
import { AppContext } from "../context/context";
import { Actions } from "../context/reducers";
import ShoppingListElement from "./ShoppingListElement";

interface CategoryProps {
  name: string;
  items: ShoplistItem[];
  activeButton: number | null;
  onActiveButton: (itemId: number | null) => void;
}

const ShoppingList = (): JSX.Element => {
  const {
    dispatch,
    state: { shoppingList },
  } = useContext(AppContext);

  const [activeButton, setActiveButton] = useState<number | null>(null);

  const itemListByCategories = shoppingList.reduce((acc, current) => {
    const value = current["categoryName"];
    acc[value] = (acc[value] || []).concat(current);
    return acc;
  }, {} as Record<string, ShoplistItem[]>);

  const handleActiveButton = (itemId: number | null): void => {
    setActiveButton(itemId);
  };

  const isShopListEmpty = shoppingList.length === 0;

  return (
    <div
      onClick={() => handleActiveButton(null)}
      className="relative flex flex-col w-full h-full py-5 bg-primary-light"
    >
      <div className="relative flex flex-row justify-end px-2 py-3 mx-5 rounded-2xl bg-violet">
        <div className="absolute -top-3 left-3 w-14">
          <img src="/source.svg" alt="Bottle" />
        </div>
        <div className="w-3/5">
          <p className="text-sm leading-none text-white">
            Didn't find what you need?
          </p>
          <button
            onClick={() => dispatch({ type: Actions.ShowNewItem })}
            className="px-3 py-1 mt-3 text-xs bg-white rounded-md"
          >
            Add item
          </button>
        </div>
      </div>

      <div
        className={`${
          isShopListEmpty && "justify-end"
        } flex flex-col flex-1 px-5 pt-6 pb-16 overflow-y-auto`}
      >
        {isShopListEmpty ? (
          <>
            <p className="grid flex-1 place-items-center">No items</p>
            <div className="z-10 -mb-1 w-full h-32 bg-contain bg-center bg-no-repeat bg-[url('/undraw_shopping_app_flsj1.svg')]"></div>
          </>
        ) : (
          <>
            <div className="flex flex-row justify-between">
              <h4 className="text-xl font-bold">Shopping list</h4>
              <span className="text-lg material-icons">edit</span>
            </div>
            <div>
              {Object.keys(itemListByCategories).map((categoryLabel) => {
                const items = itemListByCategories[categoryLabel];
                return (
                  <Category
                    name={categoryLabel}
                    items={items}
                    key={categoryLabel}
                    activeButton={activeButton}
                    onActiveButton={handleActiveButton}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-white">
        <div
          className={`${
            isShopListEmpty ? "border-nice-gray" : "border-primary"
          } flex flex-row items-center justify-between border-2 rounded-lg border-primary`}
        >
          <input
            disabled={isShopListEmpty}
            type="text"
            placeholder="Enter a name"
            className="py-4 pl-3 text-xs focus:outline-none"
          />
          <button
            disabled={isShopListEmpty}
            className="px-4 py-4 text-sm font-bold text-white rounded-md rounded-r-sm disabled:bg-nice-gray bg-primary"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const Category = ({
  name,
  items,
  activeButton,
  onActiveButton,
}: CategoryProps) => {
  return (
    <div className="flex flex-col pt-6">
      <h5 className="text-sm text-light-gray">{name}</h5>
      <ul>
        {items.map(({ id, name, pieces }) => (
          <ShoppingListElement
            itemId={id}
            title={name}
            quantity={pieces}
            key={id}
            showControls={activeButton === id}
            onActiveButton={onActiveButton}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
