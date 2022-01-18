import React, { ReactNode, useEffect, useState } from "react";
import Menu from "./Menu";
import ShoppingList from "./ShoppingList";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const MOBILE = 640;

export default function Layout({ children }: LayoutProps) {
  const [isMobile, setIsMobile] = useState(true);
  const [isOpenShopLst, setIsOpenShopLst] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < MOBILE);
    if (!isMobile) {
      setIsOpenShopLst(true);
    }

    const handleWindowResize = () => setIsMobile(window.innerWidth < MOBILE);

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  let hide: boolean = isMobile && isOpenShopLst;

  const childrenWithExtraProp = React.Children.map(children, (child) =>
    React.cloneElement(child as React.ReactElement<any>, { hide })
  );

  return (
    <div className="flex flex-row h-screen">
      <Menu toggle={() => setIsOpenShopLst(!isOpenShopLst)} />
      {childrenWithExtraProp}
      <Sidebar isMobile={isMobile} showShopList={isOpenShopLst} />
    </div>
  );
}
