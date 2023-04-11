import React from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";

function Login() {
  return (
    <>
<section className="login">
        <h1 className="login__title">Login</h1>
        <div className="login__container">
          <div className="login__form">

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

          </div>
          <div className="register__content">
            <div className="button">
              {" "}
              <button className="register__button">Entrar</button>
            </div>
            <span className="register__text">
              {" "}
              Não possui conta? <Link>Registre-se</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
