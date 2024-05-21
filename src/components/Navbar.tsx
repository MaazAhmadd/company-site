import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../utils";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery("");
    if (searchQuery) {
      navigate(`/categories/${searchQuery}`);
    }
  };
  return (
    <div className="hero-main">
      <div className="absolute z-50 navbar bg-transparent hidden md:flex justify-between">
        <div className="">
          <a
            className={cn(
              "btn btn-ghost text-white text-2xl",
              location.pathname !== "/" && "text-gray-900"
            )}
            href="/"
          >
            Yelp
          </a>
        </div>
        <div className="flex items-start">
          <form onSubmit={onSubmit} className="flex">
            <div className="flex flex-col md:flex-row">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="input input-bordered w-96 max-sm:w-auto"
              />

              <select className="select w-full max-sm:select-sm max-w-xs">
                <option selected>Los Angeles CA</option>
                <option>Washington DC</option>
                <option>Houston TX</option>
              </select>
            </div>
            <Link
              to={`categories/${searchQuery}`}
              className={cn(!searchQuery && "pointer-events-none")}
            >
              <button
                type="submit"
                className="btn btn-error bg-red-600 hover:bg-red-700 text-white disabled:bg-red-600 disabled:text-white"
              >
                <LuSearch className="size-5" />
              </button>
            </Link>
          </form>
        </div>
        <div></div>
      </div>
      <div className="navbar p-0 bg-transparent md:hidden flex justify-between flex-col">
        <div className="">
          <a href="/" className="btn btn-ghost text-white text-2xl">
            yelp
          </a>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col mb-2">
          <div className=" w-[350px] mx-auto">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit">
                <LuSearch className="size-5" />
              </button>
            </label>
          </div>
          <div className=" w-[350px] mx-auto">
            <select className="select w-full">
              <option selected>Los Angeles CA</option>
              <option>Washington DC</option>
              <option>Houston TX</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
