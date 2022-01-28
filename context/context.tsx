import { createContext, Dispatch, useReducer } from "react";
import { Item, ShoplistItem } from "../app";
import {
  ShoppingListActions,
  shoppingListReducer,
  SidebarActions,
  sidebarReducer,
} from "./reducers";

export interface SidebarState {
  isMobile: boolean;
  active: ActiveSidebar | null;
  itemDetails: Item | null;
}

export interface ShopList {
  id: number | null;
  name: string;
  list: ShoplistItem[];
}

export interface AppState {
  sidebarState: SidebarState;
  shoppingList: ShopList;
}

export enum ActiveSidebar {
  SHOPPING_LIST = "SHOPPING_LIST",
  NEW_ITEM = "NEW_ITEM",
  ITEM_DETAILS = "ITEM_DETAILS",
}

const initialState: AppState = {
  sidebarState: {
    isMobile: true,
    active: null,
    itemDetails: null,
  },
  shoppingList: {
    id: null,
    name: "",
    list: [],
  },
};

const AppContext = createContext<{
  state: AppState;
  dispatch: Dispatch<SidebarActions | ShoppingListActions>;
}>({ state: initialState, dispatch: () => null });

const mainReducer = (
  { sidebarState, shoppingList }: AppState,
  action: SidebarActions | ShoppingListActions
): AppState => {
  return {
    sidebarState: sidebarReducer(sidebarState, action),
    shoppingList: shoppingListReducer(shoppingList, action),
  };
};

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
