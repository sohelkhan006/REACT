import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-18 py-6 bg-indigo-600 text-white">
      <h2 className="font-bold text-2xl">Sohel Khan</h2>
      <div className="flex gap-10 ">
        <Link
          className="text-lg font-medium hover:text-sky-400 transition"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-lg font-medium hover:text-sky-400 transition"
          to="/about"
        >
          About
        </Link>
        <Link
          className="text-lg font-medium hover:text-sky-400 transition"
          to="course"
        >
          Course
        </Link>
        <Link
          className="text-lg font-medium hover:text-sky-400 transition"
          to="product"
        >
          Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
