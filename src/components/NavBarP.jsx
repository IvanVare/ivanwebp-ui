import React from "react";
import "../styles/styleNavBar.css";
export default function NavBarP() {
  return (
    <>
      <div className="navBar-container">
        <nav>
          <div className="navBar">
            <ul>
              <li>
                <div>Inicio</div>
                <li>
                  <button>Github</button>
                </li>
                <li>
                  <button>Linkedin</button>
                </li>
              </li>
              <li>
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-black"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                ></img>
              </li>
              <li>
                <button>Descargar CV</button>
                <li>
                  <button>Cambiar de tema</button>
                </li>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
