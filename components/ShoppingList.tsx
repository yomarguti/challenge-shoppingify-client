const ShoppingList = (): JSX.Element => {
  return (
    <aside className="flex-col hidden px-5 py-6 w-96 bg-primary-light lg:flex">
      <div className="relative flex flex-row justify-end px-2 py-3 rounded-2xl bg-violet">
        <div className="absolute -top-3 left-3 w-14">
          <img src="/source.svg" alt="Bottle" />
        </div>
        <div className="w-3/5">
          <p className="text-sm leading-none text-white">
            Didn't find what you need?
          </p>
          <button className="px-3 py-1 mt-3 text-xs bg-white rounded-md">
            Add item
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ShoppingList;
