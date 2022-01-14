const Menu = () => {
  return (
    <div className="flex flex-col items-center justify-between pt-3 pb-5 w-14">
      <div>
        <img src="/logo.svg" alt="logo" />
      </div>
      <nav className="w-full text-icons-gray">
        <ul className="w-full space-y-6">
          <li className="w-full pr-3 my-4">
            <div className="flex flex-row justify-between h-full py-2">
              <span className="border-2 rounded-r-xl border-primary"></span>
              <span className="py-2 material-icons">format_list_bulleted</span>
            </div>
          </li>
          <li className="w-full pr-3 my-4">
            <div className="flex flex-row justify-between h-full py-2">
              <span className="border-2 border-white rounded-r-xl"></span>
              <span className="py-2 material-icons">replay</span>
            </div>
          </li>
          <li className="w-full pr-3 my-4">
            <div className="flex flex-row justify-between h-full py-2">
              <span className="border-2 border-white rounded-r-xl"></span>
              <span className="py-2 material-icons">insert_chart_outlined</span>
            </div>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-center p-1 rounded-full bg-primary w-9 h-9">
        <span className="text-white material-icons">shopping_cart</span>
      </div>
    </div>
  );
};

export default Menu;
