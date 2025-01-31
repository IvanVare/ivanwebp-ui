import React from "react";
import "../styles/styleCardDescription.css";
import "../styles/styleTools.css";
import iconback from "../assets/images/back.png";
import iconfront from "../assets/images/front.png";
import iconherramientas from "../assets/images/herramientas.png";

export default function CardDescription() {
  return (
    <>
      <div className="container-card text-center ">
        <span className="font-black text-4xl">Skills</span>
        <div className=" container-cards-group grid grid-cols-1 gap-20  sm:grid-cols-2 md:gap-90px xl md:mx-40">
          <div className="cardBase">
            <div className="flex justify-center items-center h-24 mb-4">
              <img
                className="icon-skills max-h-32 max-w-32"
                src={iconfront}
                alt=""
              />
            </div>
            <div className="text-3xl font-bold mb-2 text-white">
              <h3>FontEnd</h3>
            </div>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 grid-rows-3 text-base lg:text-xl text-white">
              <span className="bg-orange-600 rounded-lg">HTML5</span>
              <span className="bg-yellow-600 rounded-lg">JavaScript</span>
              <span className="bg-blue-500 rounded-lg">CSS3</span>
              <span className="bg-blue-400 rounded-lg">Tailwind</span>
              <span className="bg-blue-700 rounded-lg">React</span>
              <span className="bg-purple-700 rounded-lg">Bootstrap</span>
            </div>
          </div>

          <div className="cardBase">
            <div className="flex justify-center items-center h-24 mb-4">
              <img
                className="icon-skills max-h-32 max-w-32"
                src={iconback}
                alt=""
              />
            </div>
            <div className="text-3xl font-bold  mb-2 text-white">
              <h3>BackEnd</h3>
            </div>
            <div className="grid gap-4 grid-cols-2 grid-rows-3 text-base lg:text-xl text-white">
              <span className="bg-orange-700 rounded-lg">Java</span>
              <span className="bg-slate-600 rounded-lg">PHP</span>
              <span className="bg-orange-500 rounded-lg">MySQL</span>
            </div>
          </div>

          <div className="cardBase">
            <div className="flex justify-center items-center h-24 mb-4">
              <img
                className="icon-skills max-h-32 max-w-32"
                src={iconherramientas}
                alt=""
              />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-white ">
              Herramientas
            </h3>
            <div className="grid gap-4 grid-cols-2 grid-rows-3 text-base lg:text-xl text-white">
              <span className="bg-blue-600 rounded-lg">VisualStudio</span>
              <span className="bg-pink-500 rounded-lg">Intellij</span>
              <span className="bg-gray-500 rounded-lg">Netbeans</span>
              <span className="bg-purple-800 rounded-lg">GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
