export default function NewItem(): JSX.Element {
  return (
    <aside className="relative flex-col w-full py-8 md:w-96 lg:flex">
      <h4>Add a new item</h4>
      <form className="flex flex-col justify-between">
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label htmlFor="note">Note (optional)</label>
            <input type="text" name="note" />
          </div>
          <div>
            <label htmlFor="image">Image (optional)</label>
            <input type="text" name="image" />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <input type="text" name="category" />
          </div>
        </div>
        <div>
          <button className="font-bold">cancel</button>
          <button className="font-bold text-white bg-primary">Save</button>
        </div>
      </form>
    </aside>
  );
}
