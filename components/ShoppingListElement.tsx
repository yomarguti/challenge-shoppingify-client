import React, { useContext } from "react";
import { AppContext } from "../context/context";
import { Actions } from "../context/reducers";

interface ShoppingListElementProps {
  itemId: number;
  title: string;
  quantity: number;
  showControls: boolean;
  onActiveButton: (itemId: number | null) => void;
}

const ShoppingListElement = ({
  itemId,
  title,
  quantity,
  showControls,
  onActiveButton,
}: ShoppingListElementProps): JSX.Element => {
  const { dispatch } = useContext(AppContext);

  const handleActiveClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
    onActiveButton(itemId);
  };

  const handleDeleteClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
    dispatch({ type: Actions.RemoveFromShoppingList, payload: itemId });
  };

  const handleIncreaseClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
    dispatch({ type: Actions.IncreaseQuantityInShoppingList, payload: itemId });
  };

  const handleDecreaseClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
    dispatch({ type: Actions.DecreaseQuantityInShoppingList, payload: itemId });
  };

  return (
    <li className="flex flex-row items-center justify-between py-2 pr-3 tracking-tight">
      <p className="text-sm font-bold">{title}</p>
      <div
        className={`${
          showControls && "bg-white"
        } bg-transparent rounded-lg flex flex-row items-center`}
      >
        <div
          onClick={handleDeleteClick}
          className={`${
            !showControls && "hidden"
          } self-stretch rounded-lg bg-primary cursor-pointer select-none`}
        >
          <span className="grid h-full px-[6px] text-base text-white material-icons place-items-center">
            delete_outline
          </span>
        </div>
        <span
          onClick={handleDecreaseClick}
          className={`${
            !showControls && "hidden"
          } px-1 text-base material-icons text-primary cursor-pointer select-none`}
        >
          remove
        </span>
        <span
          onClick={handleActiveClick}
          className="px-3 py-1 my-1 text-xs border-2 cursor-pointer rounded-3xl text-primary border-primary"
        >
          {quantity} pcs
        </span>
        <span
          onClick={handleIncreaseClick}
          className={`${
            !showControls && "hidden"
          } px-1 text-base material-icons text-primary cursor-pointer select-none`}
        >
          add
        </span>
      </div>
    </li>
  );
};

export default ShoppingListElement;
