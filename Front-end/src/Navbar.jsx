import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header className="bg-[#ece9e0] h-[100px] lg:w-full xsm:w-full   ">
        <nav className="grid grid-cols-2 justify-center items-center p-6 ">
          <div className="logo">
            <h2 className="text-black font-semibold mx-2 text-2xl ">
              Pind
              <span className="text-yellow-900 font-semibold">ari</span>
            </h2>
          </div>
          <div className="links flex justify-center items-center gap-7 px-6 text-xl font-semibold xsm:hidden md:block">
            <Link className="link px-3 py-2" to="/  home">
              Home
            </Link>
            <Link className="link px-3 py-2" to="/about">
              About
            </Link>
            <Link className="link px-3 py-2" to="/skills">
              Skills
            </Link>
            <Link className="link px-3 py-2" to="/projects">
              Projects
            </Link>
            <Link className="link px-3 py-2" to="/contact">
              Contact
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
