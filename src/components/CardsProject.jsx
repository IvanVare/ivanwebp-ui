import React from "react";
import "../styles/styleCardProject.css";
import CardProject from "./CardProject";
import projectJson from "../data/projects.json";

export default function CardsProject() {
  return (
    <>
      <div className="text-center">
        <span className="font-bold text-3xl">Proyectos</span>
        <div className="container-cards-group grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-20 ps-10">
          {projectJson.map((projects) => (
            <div key={projects.id}>
              <CardProject
                title={projects.title}
                description={projects.description}
                linkGit={projects.linkGit}
                linkProject={projects.linkProject}
                src={projects.src}
              ></CardProject>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
