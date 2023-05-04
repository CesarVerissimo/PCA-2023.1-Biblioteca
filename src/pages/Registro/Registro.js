import React from "react";
import "../Registro/registro.css";
import { Link } from "react-router-dom";

function Registro() {
  return (
    <>
      <section className="register">
        <h1 className="register__title">Registro</h1>
        <div className="register__container">
          <div className="register__form">
            <div className="form-group">
              <input type="text" className="form-control" id="name" required />
              <label className="form-control-placeholder" for="name">
                Nome completo
              </label>
            </div>

            <div class="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
              <label className="form-control-placeholder" for="email">
                Email
              </label>
            </div>

            <div class="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                required
              />
              <label className="form-control-placeholder" for="password">
                Senha
              </label>
            </div>
            <div class="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                required
              />
              <label className="form-control-placeholder" for="password">
                Confirmar senha
              </label>
            </div>
          </div>
          <div className="register__content">
            <div className="button">
              {" "}
              <button className="register__button">Entrar</button>
            </div>
            <span className="register__text">
              {" "}
              Já possui conta? <Link>Entrar</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
export default Registro;
