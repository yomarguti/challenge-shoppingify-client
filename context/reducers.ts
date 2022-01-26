import { Item, ShoplistItem } from "../app";
import { ActiveSidebar, SidebarState } from "./context";

export enum Actions {
  ShowShoppingList = "SHOW_SHOPPING_LIST",
  ShowNewItem = "SHOW_NEW_ITEM",
  ShowItemDetails = "SHOW_ITEM_DETAILS",
  SetIsMobile = "SET_IS_MOBILE",
  DismissAll = "DISMISS_ALL",
  AddToShoppingList = "ADD_TO_SHOPPING_LIST",
  RemoveFromShoppingList = "REMOVE_FROM_SHOPPING_LIST",
  IncreaseQuantityInShoppingList = "INCREASE_QUANTITY_IN_SHOPPING_LIST",
  DecreaseQuantityInShoppingList = "DECREASE_QUANTITY_IN_SHOPPING_LIST",
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
  [Actions.RemoveFromShoppingList]: number;
  [Actions.DecreaseQuantityInShoppingList]: number;
  [Actions.IncreaseQuantityInShoppingList]: number;
};

export type ShoppingListActions =
  ActionMap<ShoppingListPayload>[keyof ActionMap<ShoppingListPayload>];

export const shoppingListReducer = (
  state: ShoplistItem[],
  action: ShoppingListActions | SidebarActions
): ShoplistItem[] => {
  switch (action.type) {
    case Actions.AddToShoppingList: {
      console.log(action.payload);
      console.log(state);
      const item = state.find((it) => it.id === action.payload.id);
      if (item) {
        return state.map((it) => {
          if (it.id !== action.payload.id) {
            return it;
          }
          return { ...it, pieces: it.pieces + 1 };
        });
      }

      return [...state, { ...action.payload, pieces: 1 }];
    }
    case Actions.RemoveFromShoppingList: {
      return state.filter((listItem) => listItem.id !== action.payload);
    }
    case Actions.IncreaseQuantityInShoppingList: {
      return state.map((listItem) => {
        if (listItem.id !== action.payload) return listItem;
        return { ...listItem, pieces: listItem.pieces + 1 };
      });
    }
    case Actions.DecreaseQuantityInShoppingList: {
      return state.map((listItem) => {
        if (listItem.id !== action.payload) return listItem;
        return {
          ...listItem,
          pieces: listItem.pieces === 1 ? 1 : listItem.pieces - 1,
        };
      });
    }

    default:
      return state;
  }
};
