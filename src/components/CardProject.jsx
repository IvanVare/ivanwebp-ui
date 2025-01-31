import React, { useState } from "react";
import "../styles/styleCardProject.css";
import iconEnlace from "../assets/images/iconenlace.png";
import iconGithub from "../assets/images/icongithub.png";
import iconback from "../assets/images/back.png";
import iconfront from "../assets/images/front.png";

export default function CardProject({
  title,
  description,
  linkGitFrontEnd,
  linkGitBackEnd,
  linkProject,
  src,
}) {
  const [alertWeb, setAlertWeb] = useState(false);
  const showAlert = () => {
    setAlertWeb(true);
    setTimeout(() => {
      setAlertWeb(false);
    }, 3000);
  };

  return (
    <>
      <div className="bg-gray-800 text-white p-5 rounded-lg shadow-md bg-purple-950 m-10 ">
        <div className="flex justify-center items-center bg-slate-900 h-40 mb-4 rounded-md">
          <img className="h-40" src={src} alt="" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-justify">{description}</p>

        <div class="icon-container">
          {linkProject ? (
            <a href={linkProject} target="_blank">
              <img className="icon" src={iconEnlace} alt="" />
            </a>
          ) : (
            <>
              <a
                onClick={showAlert}
                className="cursor-pointer "
                target="_blank"
              >
                <img className="icon" src={iconEnlace} alt="" />
              </a>
              {alertWeb && (
                <div className="toast toast-end z-10">
                  <div className="alert font-bold bg-purple-600 border-purple-900 shadow-lg">
                    <span>Revisar web panika sos para descargar</span>
                  </div>
                </div>
              )}
            </>
          )}
          {linkGitFrontEnd && (
            <div>
              <a href={linkGitFrontEnd} target="_blank">
                <img className="icon" src={iconGithub} alt="" />
              </a>
              <img className="iconshow" src={iconfront} alt="" />
            </div>
          )}
          {linkGitBackEnd && (
            <div>
              <a href={linkGitBackEnd} target="_blank">
                <img className="icon" src={iconGithub} alt="" />
              </a>
              <img className="iconshow" src={iconback} alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
