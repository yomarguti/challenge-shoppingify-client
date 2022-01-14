const Header = (): JSX.Element => {
  return (
    <header className="flex-row items-start hidden mt-4 md:flex">
      <div className="w-2/3 pt-2 pr-16">
        <h1 className="text-xl leading-tight tracking-wide">
          <span className="text-primary">Shoppingify</span> allows you take your
          shopping list wherever you go
        </h1>
      </div>
      <div className="flex flex-row px-4 py-2 bg-white rounded-lg">
        <span className="material-icons">search</span>
        <input type="text" placeholder="search item" className="pl-3" />
      </div>
    </header>
  );
};

export default Header;
