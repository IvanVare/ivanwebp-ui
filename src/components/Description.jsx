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
            <div className="font-mono my-7 ">
              <p>
                Productivo, constantemente abierto a aprender nuevas habilidades
                y dominar nuevas tecnologías. Con conocimiento para el análisis
                y planificación.
              </p>
              <svg
                width="15"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="parpadea items-center"
              >
                <path
                  d="M5 3L11 8L5 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div>
              <div className="container-button" onClick={copiarEmail}>
                Correo electrónico
              </div>
              {alertVisible && (
                <div className="toast toast-end">
                  <div className="alert alert-info">
                    <span>New mail arrived.</span>
                  </div>
                </div>
              )}

              <div className="container-button" onClick={descargarCV}>
                Descargar CV
              </div>
              {alertDownload && (
                <div className="toast toast-end">
                  <div className="alert alert-success">
                    <span>Message sent successfully.</span>
                  </div>
                </div>
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
