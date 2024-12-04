import React, { useState } from "react";
import { Alert } from "@material-tailwind/react";
import "../styles/styleDescription.css";

export default function Description() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertDownload, setAlertDownload] = useState(false);
  const copiarEmail = () => {
    const MyEmail = "ivanntonio@gmail.com";
    navigator.clipboard
      .writeText(MyEmail)
      .then(() => {
        setAlertVisible(true);
        setTimeout(() => {
          setAlertVisible(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("error al copiar el texto", error);
      });
  };

  const descargarCV = () => {
    setAlertDownload(true);
    setTimeout(() => {
      setAlertDownload(false);
    }, 3000);
  };
  return (
    <>
      <div className="min-h-screen ">
        <div className="appcontent-section text-center ">
          <div className="text-container pt-40">
            <span className="text-5xl">Iván Antonio Varela Hernández</span>
            <p className="text-justify font-mono my-7">
              Productivo, constantemente abierto a aprender nuevas habilidades y
              dominar nuevas tecnologías. Con conocimiento para el análisis y
              planificación, además de aplicación de la metodología CMMi en el
              desarrollo de software, así como también de Scrum. Comprometido
              con el trabajo y gestión del tiempo, siempre dispuesto a encontrar
              soluciones efectivas ante cualquier desafío, además de aprender y
              crecer profesionalmente. Buen desempeño y organización en equipo.
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
              <div className="container-button" onClick={copiarEmail}>
                Correo electrónico
              </div>
              {alertVisible && (
                <div className="items-center">
                  <Alert color="green" className="mx-96 px-5 p-2">
                    Se guardó el correo electrónico en el portapapeles
                  </Alert>
                </div>
              )}

              <div className="container-button" onClick={descargarCV}>
                Descargar CV
              </div>
              {alertDownload && (
                <Alert color="green" className=" p-2 mx-96">
                  Descargando CV...
                </Alert>
              )}
            </div>

            <a href="/leadership-team" className="link"></a>
          </div>
          <div className="image-container"></div>
        </div>
      </div>
    </>
  );
}
