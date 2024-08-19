import React from "react";
import "../styles/styleNavBar.css";
import { NavLink, Outlet } from "react-router-dom";
export default function NavBarP() {
  return (
    <>
      <div className="navBar-container">
        <nav>
          <div className="navBar">
            <ul>
              <li>
                <NavLink to="/inicio">Inicio</NavLink>
                <li>
                  <NavLink to="https://github.com/IvanVare">Github</NavLink>
                </li>
                <li>
                  <NavLink to="https://www.linkedin.com/in/iv%C3%A1n-varela-hern/">
                    Linkedin
                  </NavLink>
                </li>
              </li>
              <li>
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-black"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                ></img>
              </li>
              <li>
                <li>
                  <a>Cambiar de tema</a>
                </li>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
