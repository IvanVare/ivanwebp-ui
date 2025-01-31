import React from "react";
import imgYo from "../../assets/images/duotone.png";

export default function DescriptionAM() {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className=" hero-content flex-col lg:flex-row-reverse">
          <img
            src={imgYo}
            className="sm:min-w-lg md:max-w-lg rounded-xl shadow-2xl"
          />
          <div>
            <span className="text-5xl font-bold">Sobre mí</span>
            <p className="font-mono py-6">
              Soy una persona comprometida con su trabajo y me gusta gestionar
              mi tiempo, enfocada en encontrar soluciones efectivas a los
              desafíos. Me caracteriza el deseo de aprender y crecer
              profesionalmente, así como mi capacidad para desempeñarme de
              manera eficiente en equipo. Valoro la organización, la exactitud y
              la precisión, y disfruto compartir ideas y puntos de vista
              constructivos. Además, me apasiona la creatividad y la creación de
              nuevas ideas, proyectos y soluciones innovadoras.
            </p>
            <button className="btn btn-primary" onClick={handleScrollToBottom}>
              Ponerse en contacto
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
