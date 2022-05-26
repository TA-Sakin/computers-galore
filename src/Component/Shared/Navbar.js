import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <NavLink className="" to="/home">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/appointment">Appointement</NavLink>
      </li>
      <li>
        <NavLink to="/reviews">Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 lg:justify-around lg:px-24">
      <div class="navbar-start">
        <Link to="/" class="btn btn-ghost text-gray-500 normal-case text-xl">
          Computers Galore
        </Link>
      </div>
      <div class="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-x-2 p-0">{menuItems}</ul>
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
