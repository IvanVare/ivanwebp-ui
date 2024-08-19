import React from "react";
import "../styles/styleDescription.css";

export default function Description() {
  return (
    <>
      <div className="min-h-screen ">
        <div>
          <div>
            <div className="appcontent-section text-center">
              <div className="text-container">
                <span className="text-5xl">Iván Antonio V. H.</span>
                <p className="text-justify font-mono my-7">
                  Productivo, constantemente abierto a aprender nuevas
                  habilidades y dominar nuevas tecnologías. Con conocimiento
                  para el análisis y planificación, además de aplicación de la
                  metodología CMMi en el desarrollo de software, así como
                  también de Scrum. Comprometido con el trabajo y gestión del
                  tiempo, siempre dispuesto a encontrar soluciones efectivas
                  ante cualquier desafío, además de aprender y crecer
                  profesionalmente. Buen desempeño y organización en equipo.
                </p>
                <svg
                  width="15"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3L11 8L5 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div>
                  <div className="container-button ">Correo electronico</div>
                  <div className="container-button">Descargar CV</div>
                </div>

                <a href="/leadership-team" className="link"></a>
              </div>
              <div className="image-container"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
