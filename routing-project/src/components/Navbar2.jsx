import React from "react";

import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-start px-6 py-1 items-center bg-indigo-800 text-white w-[18%]">
      <button
        className="bg-sky-500 hover:bg-sky-600 text-white  px-5 py-3 rounded m-1"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <button
        className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-3 rounded m-1 "
        onClick={() => {
          navigate(-1);
        }}
      >
        ←
      </button>
      <button
        className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-3 rounded m-1 "
        onClick={() => {
          navigate(+1);
        }}
      >
        →
      </button>
    </div>
  );
};

export default Navbar2;
//navigate(-1); --> To go back
//navigate(+1); --> To go forward
//navigate('/'); --> To go home page
