import { ActiveSidebar, AppState } from "./context";

export enum Types {
  ShowShoppingList = "SHOW_SHOPPING_LIST",
  ShowNewItem = "SHOW_NEW_ITEM",
  SetIsMobile = "SET_IS_MOBILE",
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

type SidebarPayload = {
  [Types.SetIsMobile]: boolean;
  [Types.ShowShoppingList]: undefined;
  [Types.ShowNewItem]: undefined;
};

export type SidebarActions =
  ActionMap<SidebarPayload>[keyof ActionMap<SidebarPayload>];

export const sidebarReducer = (
  state: AppState,
  action: SidebarActions
): AppState => {
  switch (action.type) {
    case Types.SetIsMobile:
      return { ...state, isMobile: action.payload };
    case Types.ShowShoppingList:
      const active =
        state.active === ActiveSidebar.SHOPPING_LIST
          ? null
          : ActiveSidebar.SHOPPING_LIST;
      return { ...state, active };
    default:
      return state;
  }
};
