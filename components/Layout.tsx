import React, { ReactNode, useEffect, useState, useContext } from "react";
import { ActiveSidebar, AppContext } from "../context/context";
import { Types } from "../context/reducers";
import Menu from "./Menu";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const MOBILE = 640;

export default function Layout({ children }: LayoutProps) {
  const [isOpenShopLst, setIsOpenShopLst] = useState(false);

  const {
    state: { isMobile, active },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    if (!isMobile) {
      setIsOpenShopLst(true);
    }

    const handleWindowResize = () => {
      dispatch({
        type: Types.SetIsMobile,
        payload: window.innerWidth < MOBILE,
      });
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const showMainContent: boolean = active !== null && isMobile;
  console.log("isMobile: ", isMobile);
  console.log("active: ", active);

  return (
    <div className="flex flex-row h-screen">
      <Menu toggle={() => dispatch({ type: Types.ShowShoppingList })} />
      <div className={` ${showMainContent && "hidden"} w-full`}>{children}</div>
      <Sidebar
        isMobile={isMobile}
        showShopList={active == ActiveSidebar.SHOPPING_LIST}
        activeComponent={active}
      />
    </div>
  );
}
