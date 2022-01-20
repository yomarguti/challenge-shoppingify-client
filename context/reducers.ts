import { ActiveSidebar, AppState } from "./context";

export enum Actions {
  ShowShoppingList = "SHOW_SHOPPING_LIST",
  ShowNewItem = "SHOW_NEW_ITEM",
  SetIsMobile = "SET_IS_MOBILE",
  DismissAll = "DISMISS_ALL",
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
  [Actions.DismissAll]: undefined;
};

export type SidebarActions =
  ActionMap<SidebarPayload>[keyof ActionMap<SidebarPayload>];

export const sidebarReducer = (
  state: AppState,
  action: SidebarActions
): AppState => {
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
    case Actions.DismissAll: {
      return { ...state, active: null };
    }
    default:
      return state;
  }
};
