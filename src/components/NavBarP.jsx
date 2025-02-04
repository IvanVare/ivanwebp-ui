import React from "react";
import "../styles/styleNavBar.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import iconGithub from "../assets/images/iconogithub.png";
import iconLinkedin from "../assets/images/iconlinkedin.png";
import { Button } from "@headlessui/react";

const navigation = [
  { name: "Inicio", href: "#", current: false },
  { name: "Github", href: "https://github.com/IvanVare", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBarP() {
  return (
    <>
      <div className="navbar backdrop-blur-sm bg-black/30 fixed z-20">
        <div className="navbar-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className=" btn btn-ghost btn-square"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box bg-black/30 z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="m-1">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-[#0d1580] border-2 bg-[#1929ff2f] text-white hover:bg-[#0d15808c] focus:outline-2 focus:outline-offset-2 focus:outline-[#0d1580] active:border-[#0d1580]"
                      : " hover:outline-[#0d1580] focus:outline-2 focus:outline-offset-2 focus:outline-[#0d1580] active:bg-[#0d1580]"
                  }
                  to={"/inicio"}
                >
                  Inicio
                </NavLink>
              </li>
              <li className="m-1">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-[#0d1580] border-2 bg-[#1929ff2f] text-white hover:bg-[#0d15808c] focus:outline-1 focus:outline-offset-2 focus:outline-[#0d1580] active:border-[#0d1580]"
                      : " hover:outline-[#0d1580] focus:outline-2 focus:outline-offset-2 focus:outline-[#0d1580] active:bg-[#0d1580]"
                  }
                  to="/acercade"
                >
                  Acerca de mí
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <label className="relative flex rounded-full bg-purple-800 text-sm focus:outline-none focus:ring-2 focus:ring-offset-purple-800 ">
            <span className="absolute -inset-1.5" />
            <img
              alt="Iván AVH"
              src="https://lh3.googleusercontent.com/a/ACg8ocIxYu08rV6HE-01SjeD5i8otyVFs71VfqDqy6cAjfJWjiI5rL-g=s96-c-rg-br100"
              className="h-12 w-12 rounded-full"
            />
          </label>
        </div>

        <div className="navbar-end">
          <NavLink
            to="https://www.linkedin.com/in/iv%C3%A1n-varela-hern/"
            target="_blank"
          >
            <img
              aria-hidden="true"
              className="iconLinkein h-7 w-7 m-2"
              src={iconLinkedin}
              alt=""
            />
          </NavLink>
          <NavLink to="https://github.com/IvanVare" target="_blank">
            <img
              aria-hidden="true"
              className="icon h-7 w-7 m-2"
              src={iconGithub}
              alt=""
            />
          </NavLink>
        </div>
      </div>

      <Outlet />
    </>
  );
}
