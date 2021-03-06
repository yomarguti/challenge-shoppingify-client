import { ActiveSidebar } from "../context/context";
import { ItemDetail } from "./ItemDetail";
import NewItem from "./NewItem";
import ShoppingList from "./ShoppingList";

interface SidebarProps {
  isMobile: boolean;
  activeComponent: ActiveSidebar | null;
}

export default function Sidebar(props: SidebarProps): JSX.Element {
  const { isMobile, activeComponent } = props;

  const sidebarComponents = {
    [ActiveSidebar.NEW_ITEM]: <NewItem />,
    [ActiveSidebar.SHOPPING_LIST]: <ShoppingList />,
    [ActiveSidebar.ITEM_DETAILS]: <ItemDetail />,
  };

  let activeSidebar = <></>;

  if (
    (!isMobile && activeComponent === null) ||
    activeComponent === ActiveSidebar.SHOPPING_LIST
  ) {
    activeSidebar = (
      <aside className="w-full md:w-96">
        <ShoppingList />
      </aside>
    );
  }

  if (activeComponent !== null) {
    activeSidebar = (
      <aside className="w-full md:w-96">
        {sidebarComponents[activeComponent]}
      </aside>
    );
  }

  return activeSidebar;
}
