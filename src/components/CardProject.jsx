import React from "react";
import "../styles/styleCardProject.css";
export default function CardProject() {
  return (
    <>
      <div className="container-cards-group grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-20 ps-10">
        <div className="bg-red-800 text-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center items-center h-24 mb-4"></div>
          <h3 className="text-xl font-bold mb-2">Titulo</h3>
          <p className="text-gray-400">Descripcion</p>
          <button>Github</button>
          <button>Enlace</button>
        </div>
        <div className="bg-red-800 text-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center items-center h-24 mb-4"></div>
          <h3 className="text-xl font-bold mb-2">Titulo</h3>
          <p className="text-gray-400">Descripcion</p>
          <button>Github</button>
          <button>Enlace</button>
        </div>
      </div>
    </>
  );
}
