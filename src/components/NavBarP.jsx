import React from "react";
import "../styles/styleNavBar.css";
import { NavLink, Outlet, Navigate, useNavigate } from "react-router-dom";
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
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-black/50 rounded-box z-[1] mt-3 w-52 p-2  shadow"
            >
              <li className="m-1">
                <NavLink to={"/inicio"}>Inicio</NavLink>
              </li>
              <li className="m-1">
                <NavLink to={"/AcercaDe"}>Acerca de mí</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Button className="relative flex rounded-full bg-purple-800 text-sm focus:outline-none focus:ring-2 focus:ring-offset-purple-800 ">
            <span className="absolute -inset-1.5" />
            <img
              alt=""
              src="https://lh3.googleusercontent.com/a/ACg8ocIxYu08rV6HE-01SjeD5i8otyVFs71VfqDqy6cAjfJWjiI5rL-g=s288-c-no"
              className="h-12 w-12 rounded-full"
            />
          </Button>
        </div>

        <div className="navbar-end">
          <NavLink
            to="https://www.linkedin.com/in/iv%C3%A1n-varela-hern/"
            target="_blank"
          >
            <img
              aria-hidden="true"
              className="icon h-6 w-6 m-1"
              src={iconLinkedin}
              alt=""
            />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/iv%C3%A1n-varela-hern/"
            target="_blank"
          >
            <img
              aria-hidden="true"
              className="icon h-6 w-6 m-1"
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
