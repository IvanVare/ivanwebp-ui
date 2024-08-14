import React from "react";
import "../styles/styleDescription.css";

export default function Description() {
  return (
    <>
      <div>
        <div className="aboutUs-content">
          <div className="appcontent-section">
            <div className="text-container">
              <h2>Nuestra aplicación</h2>
              <p>somos alumnos de la uatx etc etc.</p>
              <a href="/leadership-team" className="link"></a>
              <svg
                width="16"
                height="16"
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
            </div>
            <div className="image-container">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/84/Logo_de_la_UATx.svg"
                alt="uatx"
              />
            </div>
            <div className="text-container">
              <h2>Nuestra aplicación</h2>
              <p>somos alumnos de la uatx etc etc.</p>
              <a href="/leadership-team" className="link"></a>
              <svg
                width="16"
                height="16"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
