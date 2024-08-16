import React from "react";
import "../styles/styleCardDescription.css";
import iconback from "../assets/images/back.png";
import iconfront from "../assets/images/front.png";
import iconherramientas from "../assets/images/herramientas.png";

export default function CardDescription() {
  return (
    <>
      <div className="container-card text-center">
        <p>Skills</p>
        <div className="container-cards-group grid md:gap-90px sm:gap-20 grid-cols-2  md:mx-40">
          <div className="cardBase">
            <div className="flex justify-center items-center h-24 mb-4">
              <img
                className="icon-skills max-h-32 max-w-32"
                src={iconfront}
                alt=""
              />
            </div>
            <h3 className="text-3xl font-bold mb-2  ">FontEnd</h3>
            <p className="text-gray-400">Descripcion</p>
          </div>

          <div className="cardBase">
            <div className="flex justify-center items-center h-24 mb-4">
              <img
                className="icon-skills max-h-32 max-w-32"
                src={iconback}
                alt=""
              />
            </div>
            <h3 className="text-3xl font-bold mb-2  ">BackEnd</h3>
            <p className="text-gray-400">Descripcion</p>
          </div>

          <div className="cardBase">
            <div className="flex justify-center items-center h-24 mb-4">
              <img
                className="icon-skills max-h-32 max-w-32"
                src={iconherramientas}
                alt=""
              />
            </div>
            <h3 className="text-3xl font-bold mb-2  ">Herramientas</h3>
            <p className="text-gray-400">Descripcion</p>
          </div>
        </div>
      </div>
    </>
  );
}
