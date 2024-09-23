import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="w-full  bg-red-800 text-white flex justify-between items-center px-7 py-4">
        <h1 className="font-extrabold text-white text-3xl hover:scale-105 duration-200">
          .React
        </h1>
        <ul
          className="flex
         gap-5"
        >
          <li className="bg-red-600 rounded px-4 py-2 cursor-pointer hover:scale-105 duration-200">
            <Link to={"/register"}>RegisterPage</Link>
          </li>
          <li className="bg-red-600 rounded px-4 py-2 cursor-pointer hover:scale-105 duration-200">
            <Link to={"/login"}>Login Page</Link>
          </li>
          <li className="bg-red-600 rounded px-4 py-2 cursor-pointer hover:scale-105 duration-200">
            <Link to={"/counter"}>Counter</Link>
          </li>
          <li className="bg-red-600 rounded px-4 py-2 cursor-pointer hover:scale-105 duration-200">
            <Link to={"/todo"}>Todo</Link>
          </li>
          <li className="bg-red-600 rounded px-4 py-2 cursor-pointer hover:scale-105 duration-200">
            <Link to={"/fetch"}>Fetch API</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
