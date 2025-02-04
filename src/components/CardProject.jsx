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
      <div className="bg-blue-950 text-white p-5 rounded-lg shadow-2xl bg-[#0d158088] m-10">
        <div className="flex justify-center items-center bg-slate-900 h-40 mb-4 rounded-md">
          <img className="h-40" src={src} alt="" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-justify">{description}</p>

        <div class=" flex flex-col xl:flex-row items-center justify-center w-full h-full">
          {linkProject ? (
            <a href={linkProject} target="_blank">
              <img
                className="icon w-10 h-10 mx-5 lg:mx-10 mt-5"
                src={iconEnlace}
                alt=""
              />
            </a>
          ) : (
            <>
              <a
                onClick={showAlert}
                className="cursor-pointer "
                target="_blank"
              >
                <img
                  className="icon w-10 h-10 mx-5 lg:mx-10 mt-5"
                  src={iconEnlace}
                  alt=""
                />
              </a>
              {alertWeb && (
                <div className="fixed toast-end z-50 ">
                  <div className="alert font-bold w-auto bg-[#242ebd] border-[#0d1580] shadow-2xl">
                    <span>Revisar web panika sos para descargar</span>
                  </div>
                </div>
              )}
            </>
          )}
          {linkGitFrontEnd && (
            <div className=" flex flex-row xl:flex-col mx-5  mt-5">
              <a href={linkGitFrontEnd} target="_blank">
                <img className="icon w-10 h-10 m-2" src={iconGithub} alt="" />
              </a>
              <img className="iconshow w-10 h-10 m-2" src={iconfront} alt="" />
            </div>
          )}
          {linkGitBackEnd && (
            <div className="flex flex-row xl:flex-col mx-5  mt-5">
              <div>
                <a href={linkGitBackEnd} target="_blank">
                  <img className="icon w-10 h-10 m-2" src={iconGithub} alt="" />
                </a>
              </div>

              <div>
                <img className="iconshow w-10 h-10 m-2" src={iconback} alt="" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
