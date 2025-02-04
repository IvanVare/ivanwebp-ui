import React, { useState } from "react";
import "../styles/styleDescription.css";

export default function Description() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertDownload, setAlertDownload] = useState(false);

  const copiarEmail = () => {
    setAlertDownload(false);
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
    setAlertVisible(false);
    setAlertDownload(true);
    const link = document.createElement("a");
    link.href = "/documents/CV-Ivan_Antonio_Varela_Hernandez.pdf"; // Ruta dentro de public/
    link.download = "CV-Ivan_Antonio_Varela_Hernandez.pdf"; // Nombre al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

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
            <br />
            <span className="font-bold text-2xl mb-5">
              Ingeniero de Software
            </span>
            <div className="font-mono my-7 ">
              <p className="mx-6 lg:mx-44">
                Autodidacta con pasión por el aprendizaje continuo, productivo y
                proactivo, abierto a adquirir nuevas habilidades. Pasión por el
                análisis, la planicación y en la aplicación práctica de lo
                aprendido. Disfruto explorar nuevas ideas y soluciones
                innovadoras.
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
                <div className="toast toast-end z-50">
                  <div className="alert font-bold bg-[#242ebd] border-[#0d1580] shadow-2xl">
                    <span>Correo electrónico copiado</span>
                  </div>
                </div>
              )}

              <div className="container-button " onClick={descargarCV}>
                Descargar CV
              </div>
              {alertDownload && (
                <div className="toast toast-end z-50">
                  <div className="alert font-bold bg-[#242ebd] border-[#0d1580] shadow-2xl">
                    <span>Se inició la descarga...</span>
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
