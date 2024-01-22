import { Link } from "react-router-dom";

import { logo } from "../assets";

const Nav = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b border-b-neutral-100 bg-white p-4 sm:px-8">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-28 object-contain" />
      </Link>
      <Link
        to="/create-post"
        className="rounded-md bg-indigo-500 px-4 py-2 font-medium text-white"
      >
        Create
      </Link>
    </nav>
  );
};

export default Nav;
