import { Item } from "../app";
import { ActiveSidebar, SidebarState } from "./context";

export enum Actions {
  ShowShoppingList = "SHOW_SHOPPING_LIST",
  ShowNewItem = "SHOW_NEW_ITEM",
  ShowItemDetails = "SHOW_ITEM_DETAILS",
  SetIsMobile = "SET_IS_MOBILE",
  DismissAll = "DISMISS_ALL",
  AddToShoppingList = "ADD_TO_SHOPPING_LIST",
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

type SidebarPayload = {
  [Actions.SetIsMobile]: boolean;
  [Actions.ShowShoppingList]: undefined;
  [Actions.ShowNewItem]: undefined;
  [Actions.ShowItemDetails]: Item;
  [Actions.DismissAll]: undefined;
};

export type SidebarActions =
  ActionMap<SidebarPayload>[keyof ActionMap<SidebarPayload>];

export const sidebarReducer = (
  state: SidebarState,
  action: SidebarActions | ShoppingListActions
): SidebarState => {
  switch (action.type) {
    case Actions.SetIsMobile: {
      return { ...state, isMobile: action.payload };
    }
    case Actions.ShowShoppingList: {
      const active =
        state.active === ActiveSidebar.SHOPPING_LIST
          ? null
          : ActiveSidebar.SHOPPING_LIST;
      return { ...state, active };
    }
    case Actions.ShowNewItem: {
      const active =
        state.active === ActiveSidebar.NEW_ITEM ? null : ActiveSidebar.NEW_ITEM;
      return { ...state, active };
    }
    case Actions.ShowItemDetails: {
      return {
        ...state,
        itemDetails: action.payload,
        active: ActiveSidebar.ITEM_DETAILS,
      };
    }
    case Actions.DismissAll: {
      return { ...state, active: null };
    }
    default:
      return state;
  }
};

type ShoppingListPayload = {
  [Actions.AddToShoppingList]: Item;
};

export type ShoppingListActions =
  ActionMap<ShoppingListPayload>[keyof ActionMap<ShoppingListPayload>];

export const shoppingListReducer = (
  state: Item[],
  action: ShoppingListActions | SidebarActions
): Item[] => {
  switch (action.type) {
    case Actions.AddToShoppingList: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
