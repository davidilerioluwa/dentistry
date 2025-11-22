import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen flex justify-center fixed top-0 left-0 z-20 p-3">
      <div className="bg-black/20 w-2/3 rounded-lg flex items-center justify-between text-white backdrop-blur-sm px-5 py-2.5 text-sm">
        <div className="text-xl font-bold">STUNNING</div>
        <div className="flex gap-4 items-center">
          <span>Home</span>
          <span>About</span>
          <button className="bg-yellow-600 text-white py-2.5 px-5 rounded-lg cursor-pointer">
            Get a Consult
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
