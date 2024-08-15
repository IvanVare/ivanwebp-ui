import React from "react";
import "../styles/styleCardDescription.css";
export default function CardDescription() {
  return (
    <>
      <div className="container-card">
        <div className="container-cards-group grid  md:grid-cols-2 lg:grid-cols-2 gap-20 mx-60">
          <div className="cardBase">
            <div className="flex justify-center items-center h-24 mb-4"></div>
            <h3 className="text-xl font-bold mb-2  ">Titulo</h3>
            <p className="text-gray-400">Descripcion</p>
          </div>

          <div className="cardBase">
            <div className="flex justify-center items-center h-24 mb-4"></div>
            <h3 className="text-xl font-bold mb-2  ">Titulo</h3>
            <p className="text-gray-400">Descripcion</p>
          </div>

          <div className="cardBase">
            <div className="flex justify-center items-center h-24 mb-4"></div>
            <h3 className="text-xl font-bold mb-2  ">Titulo</h3>
            <p className="text-gray-400">Descripcion</p>
          </div>
        </div>
      </div>
    </>
  );
}
