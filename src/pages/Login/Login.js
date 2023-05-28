import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Login/login.css";

function Login() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
    e.preventDefault();

    try{

      await axios.post("https://localhost:3000/",{
        email,password
      })

    }
    catch(e){
      console.log(e);
    }
  }

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
                onChange={(e)=>{setEmail(e.target.value)}}
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
                onChange={(e)=>{setPassword(e.target.value)}}
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
              <button className="register__button" onClick={submit}>Entrar</button>
            </div>
            <span className="register__text">
              {" "}
              Não possui conta? <Link to="/criar-conta">Registre-se</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
