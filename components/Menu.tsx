interface MenuProps {
  toggle: () => void;
}

import Link from "next/link";
import { useRouter } from "next/router";

const Menu = ({ toggle }: MenuProps) => {
  const router = useRouter();

  const isActive = (route: string): string => {
    return route === router.pathname ? "border-primary" : "border-white";
  };

  return (
    <div className="flex flex-col items-center justify-between pt-3 pb-5 w-14">
      <div>
        <img src="/logo.svg" alt="logo" />
      </div>
      <nav className="w-full text-icons-gray">
        <ul className="w-full space-y-6">
          <li className="w-full pr-3 my-4">
            <div className="flex flex-row justify-between h-full py-2">
              <span className={`border-2 rounded-r-xl ${isActive("/")}`}></span>
              <Link href="/">
                <a>
                  <span className="py-2 material-icons">
                    format_list_bulleted
                  </span>
                </a>
              </Link>
            </div>
          </li>
          <li className="w-full pr-3 my-4">
            <div className="flex flex-row justify-between h-full py-2">
              <span
                className={`border-2 rounded-r-xl ${isActive("/history")}`}
              ></span>
              <Link href="/history">
                <a>
                  <span className="py-2 material-icons">replay</span>
                </a>
              </Link>
            </div>
          </li>
          <li className="w-full pr-3 my-4">
            <div className="flex flex-row justify-between h-full py-2">
              <span
                className={`border-2 rounded-r-xl ${isActive("/statistics")}`}
              ></span>
              <Link href="/statistics">
                <a>
                  <span className="py-2 material-icons">
                    insert_chart_outlined
                  </span>
                </a>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      <div
        onClick={toggle}
        className="flex items-center justify-center p-1 rounded-full bg-primary w-9 h-9"
      >
        <span className="text-white material-icons">shopping_cart</span>
      </div>
    </div>
  );
};

export default Menu;
