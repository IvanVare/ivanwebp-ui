import React from "react";
import "../styles/styleCardProject.css";
import DPA from "../assets/images/appDPA.jpg";
import Pksos from "../assets/images/appPks.jpg";
import WebPksos from "../assets/images/webPksos.png";
import Portafolio from "../assets/images/portafolio.png";

import iconEnlace from "../assets/images/iconenlace.png";

import iconGithub from "../assets/images/icongithub.png";

export default function CardProject() {
  return (
    <>
      <div className="text-center">
        <p>Proyectos</p>
        <div className="container-cards-group grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-20 ps-10">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md bg-">
            <div className="flex justify-center items-center bg-slate-900 h-28 mb-4 rounded-md">
              <img className="h-28" src={DPA} alt="" />
            </div>
            <h3 className="text-xl font-bold mb-2">Titulo</h3>
            <p className="text-gray-400">
              Descripcion Aplicacion movil para jkashd kahdsjkh ask jahdka hkdah
              kahs ka kajshdkjahsd kjasdhkjas dk sdsa {"asd"}
            </p>

            <div class="icon-container">
              <img className="icon" src={iconEnlace} alt="" />
              <img className="icon" src={iconGithub} alt="" />
            </div>
          </div>

          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md bg-">
            <div className="flex justify-center items-center bg-slate-900 h-28 mb-4 rounded-md">
              <img className="h-28" src={Pksos} alt="" />
            </div>
            <h3 className="text-xl font-bold mb-2">Titulo</h3>
            <p className="text-gray-400">
              Descripcion Aplicacion movil para jkashd kahdsjkh ask jahdka hkdah
              kahs ka kajshdkjahsd kjasdhkjas dk sdsa {"asd"}
            </p>

            <div class="icon-container">
              <img className="icon" src={iconEnlace} alt="" />
              <img className="icon" src={iconGithub} alt="" />
            </div>
          </div>

          <div className="bg-red-800 text-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center items-center bg-slate-900 h-28 mb-4 rounded-md">
              <img className="h-28" src={WebPksos} alt="" />
            </div>
            <h3 className="text-xl font-bold mb-2">Titulo</h3>
            <p className="text-gray-400">Descripcion</p>
            <button>Github</button>
            <button>Enlace</button>
          </div>

          <div className="bg-red-800 text-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center items-center h-24 mb-4 ">
              <img className="h-28" src={Portafolio} alt="" />
            </div>
            <h3 className="text-xl font-bold mb-2">Titulo</h3>
            <p className="text-gray-400">Descripcion</p>
            <button>Github</button>
            <button>Enlace</button>
          </div>
        </div>
      </div>
    </>
  );
}
