import { ActiveSidebar } from "../context/context";
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
  };

  let renderComponent = <></>;

  if (
    (!isMobile && activeComponent === null) ||
    activeComponent === ActiveSidebar.SHOPPING_LIST
  ) {
    renderComponent = <ShoppingList />;
  }

  if (activeComponent !== null) {
    renderComponent = sidebarComponents[activeComponent];
  }

  return renderComponent;
}
