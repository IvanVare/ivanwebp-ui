import React from "react";
import "../styles/styleCardProject.css";
import iconEnlace from "../assets/images/iconenlace.png";
import iconGithub from "../assets/images/icongithub.png";

export default function CardProject({
  title,
  description,
  linkGit,
  linkProject,
  src,
}) {
  return (
    <>
      <div className="bg-gray-800 text-white p-5 rounded-lg shadow-md bg-purple-950 m-10 ">
        <div className="flex justify-center items-center bg-slate-900 h-40 mb-4 rounded-md">
          <img className="h-40" src={src} alt="" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-justify">{description}</p>

        <div class="icon-container">
          <a href={linkProject} target="_blank">
            <img className="icon" src={iconEnlace} alt="" />
          </a>
          <a href={linkGit} target="_blank">
            <img className="icon" src={iconGithub} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
