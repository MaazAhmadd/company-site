import { LuSearch } from "react-icons/lu";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-transparent hidden md:flex justify-between">
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
      </div>
      <div className="navbar p-0 bg-transparent md:hidden flex justify-between flex-col">
        <div className="">
          <a className="btn btn-ghost text-white text-2xl">daisyUI</a>
        </div>
        <div className="flex flex-col mb-2">
          <div className=" w-[350px] mx-auto">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <LuSearch className="size-5" />
            </label>
          </div>
          <div className=" w-[350px] mx-auto">
            <select className="select w-full">
              <option selected>Los Angeles CA</option>
              <option>Washington DC</option>
              <option>Houston TX</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
