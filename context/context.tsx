import { createContext, Dispatch, useReducer } from "react";
import { SidebarActions, sidebarReducer } from "./reducers";

export interface AppState {
  isMobile: boolean;
  active: ActiveSidebar | null;
}

export enum ActiveSidebar {
  SHOPPING_LIST = "SHOPPING_LIST",
  NEW_ITEM = "NEW_ITEM",
}

const initialState: AppState = {
  isMobile: true,
  active: null,
};

const AppContext = createContext<{
  state: AppState;
  dispatch: Dispatch<SidebarActions>;
}>({ state: initialState, dispatch: () => null });

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(sidebarReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
