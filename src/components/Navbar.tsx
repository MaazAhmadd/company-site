import { LuSearch } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="navbar  bg-transparent flex justify-between">
      <div className="">
        <a className="btn btn-ghost text-white text-2xl">daisyUI</a>
      </div>
      <div className="flex items-start">
        <div className="flex flex-col md:flex-row">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-96 max-sm:w-auto"
            />
          </div>

          <select className="select w-full max-sm:select-sm max-w-xs">
            <option selected>Los Angeles CA</option>
            <option>Washington DC</option>
            <option>Houston TX</option>
          </select>
        </div>
        <button className="btn btn-error bg-red-600 hover:bg-red-700 text-white">
          <LuSearch className="size-5" />
        </button>
      </div>
      <div></div>
      {/* <div className="">
        <ul className="menu menu-horizontal px-1 text-lg font-bold">
          <li>
            <a className="text-white">Link</a>
          </li>
          <li>
            <details>
              <summary className="text-white">Parent</summary>
              <ul className="p-2 rounded-t-none">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
