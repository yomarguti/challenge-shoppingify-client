import ShoppingList from "./ShoppingList";

interface SidebarProps {
  isMobile: boolean;
  showShopList: boolean;
}

export default function Sidebar({ isMobile, showShopList }: SidebarProps) {
  if (!isMobile) {
    return <ShoppingList />;
  }

  if (isMobile && showShopList) {
    return <ShoppingList />;
  }

  return null;
}
