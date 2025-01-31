import React from "react";
import "../styles/styleCardProject.css";
import CardProject from "./CardProject";
import projectJson from "../data/projects.json";

import appDPA from "../assets/images/appDPA.jpg";
import appPks from "../assets/images/appPks.jpg";
import webPksos from "../assets/images/webPksos.png";
import portafolio from "../assets/images/portafolio.png";

const imageMap = {
  "src/assets/images/appDPA.jpg": appDPA,
  "src/assets/images/appPks.jpg": appPks,
  "src/assets/images/webPksos.png": webPksos,
  "src/assets/images/portafolio.png": portafolio,
};

export default function CardsProject() {
  return (
    <>
      <div className="container-card text-center">
        <span className="font-bold text-4xl">Proyectos</span>
        <div className="container-cards-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-20 ps-10">
          {projectJson.map((projects) => (
            <div key={projects.id}>
              <CardProject
                title={projects.title}
                description={projects.description}
                linkGitFrontEnd={projects.linkGitFrontEnd}
                linkGitBackEnd={projects.linkGitBackEnd}
                linkProject={projects.linkProject}
                src={imageMap[projects.src]}
              ></CardProject>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
