import React, { ReactNode, useEffect, useContext } from "react";
import { AppContext } from "../context/context";
import { Actions } from "../context/reducers";
import Menu from "./Menu";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const MOBILE = 640;

export default function Layout({ children }: LayoutProps) {
  const {
    state: {
      sidebarState: { isMobile, active },
    },
    dispatch,
  } = useContext(AppContext);

  console.log("active: ", active);
  console.log("isMobile: ", isMobile);
  useEffect(() => {
    const handleWindowResize = () => {
      dispatch({
        type: Actions.SetIsMobile,
        payload: window.innerWidth < MOBILE,
      });
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const showMainContent: boolean = active !== null && isMobile;

  return (
    <div className="flex flex-row h-screen">
      <Menu toggle={() => dispatch({ type: Actions.ShowShoppingList })} />
      <div className={` ${showMainContent && "hidden"} w-full`}>{children}</div>
      <Sidebar isMobile={isMobile} activeComponent={active} />
    </div>
  );
}
