import React from "react";
import { GoMarkGithub } from 'react-icons/go'
import { Link } from "react-router-dom";

const Navbar = () => {
  return <nav className="w-full bg-cyan-700 h-[10%] items-center justify-center flex shadow-lg">
    <div className="flex items-center px-8 justify-between w-full max-w-5xl">
      <div className="text-5xl flex text-white font-bold space-x-3 items-center ">
        <GoMarkGithub />
        <h1 className="hidden sm:inline-block">Search</h1>
      </div>
      <div className="text-white text-2xl font-bold flex space-x-4">
        <Link to='/projects/github-users' >
          <h3 className="tracking-[4px] hover:text-amber-600 transition-all duration-300 ease-out">home</h3>
        </Link>
        <Link to='/projects/github-users/about' >
          <h3 className="tracking-[4px] hover:text-amber-600 transition-all duration-300 ease-out">about</h3>
        </Link>
      </div>
    </div>
  </nav>;
};

export default Navbar;
