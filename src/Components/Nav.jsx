import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png"

const Nav = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link to={"/"}>Home</Link>
            <Link to={"apps"}>Apps</Link>
            <Link to={"/installation"}>Installation</Link>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl"><img className="w-8" src={logo} alt="" />HERO.IO</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3">
          <Link to={"/"}>Home</Link>
          <Link to={"apps"}>Apps</Link>
          <Link to={"/installation"}>Installation</Link>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-primary bg-purple"><a href="https://github.com/chowdhury-yeamin"  className="flex"><img src="https://github.com/fluidicon.png" alt="" className="w-5 " />Contribute</a></button>
      </div>
    </div>
  );
};

export default Nav;
