import React from "react";
import "../styles/styleButtons.css";
export default function Buttons() {
  return (
    <>
      <div className="container-cards-group">
        <div className="container-card">
          <div className="">
            <div className="cardF">
              <div className="cardF cardF-continer"></div>
              <div className="card-body">
                <h5 className="function-card-title">titulo</h5>
                <p className="function-card-text">descripcion</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-card">
          <div className="col">
            <div className="cardF">
              <div className="cardF cardF-continer"></div>
              <div className="card-body">
                <h5 className="function-card-title">titulo</h5>
                <p className="function-card-text">descripcion</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-card">
          <div className="col">
            <div className="cardF">
              <div className="cardF cardF-continer"></div>
              <div className="card-body">
                <h5 className="function-card-title">titulo</h5>
                <p className="function-card-text">descripcion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
