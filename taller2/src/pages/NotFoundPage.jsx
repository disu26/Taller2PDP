import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container mt-5">
      <label className="mdc-text-field mdc-text-field--outlined">
        <span className="mdc-notched-outline">
          <span className="mdc-notched-outline__leading"></span>
          <span className="mdc-notched-outline__notch">
            <span className="mdc-floating-label" id="my-label-id">
              Página no encontrada, presione el botón para volver a la página
              principal.
            </span>
          </span>
        </span>
      </label>
      <div className="mt-4">
        <NavLink to="/">Regresar</NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
