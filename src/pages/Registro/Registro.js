import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Registro/registro.css";

function Registro() {

  const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
    e.preventDefault();

    try{

      await axios.post("https://localhost:3000/",{
        email,password
      })
      .then(res=>{
        if(res.data="exist"){
          alert("Usuario já existe")
        }
        else if(res.data="notexist"){
          history("/pages/Home")
        }
      })
      .catch(e=>{
        alert("Senha ou Email incorreto!")
        console.log(e);
      })
    }
    catch(e){
      console.log(e);
    }
  }

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
                onChange={(e)=>{setPassword(e.target.value)}}
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
              <button className="register__button" onClick={submit}>Entrar</button>
            </div>
            <span className="register__text">
              {" "}
              Já possui conta? <Link to="/login">Entrar</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
export default Registro;
