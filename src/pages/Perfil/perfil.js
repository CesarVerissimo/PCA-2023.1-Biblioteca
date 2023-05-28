import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Perfil/perfil.css";

function perfil() {
  return (
    <>
      <section className="profile">
        <div className="profile__left">
          <figure>
            <img
              className="profile__image"
              src="https://i.pinimg.com/474x/65/a7/b0/65a7b04120cb6aea40e399b33638f6c8.jpg"
              alt="FIKUSDYIKFDF"
            />
          </figure>
          <h3 className="profile__name">nome</h3>
          <ul className="profile__list">
            <li className="profile__list-item">Ranking</li>
            <li className="profile__list-item">Informação Pessoal</li>
            <li className="profile__list-item">Segurança e privacidade</li>
          </ul>
        </div>
        <div className="vertical-hr"></div>
        <div className="profile__right">
          <label className="profile__right-name" for="nome">
            Nome
          </label>
          <input type="text" className="" id="perfil-nome"></input>

          <label className="profile__right-email" for="email">
            Email
          </label>
          <input type="email" className="" id="perfil-email"></input>
          <label className="textarea">Sobre mim</label>
          <textarea className="profile__textarea" rows="4" cols="50"></textarea>
          <div className="profile__right-button">
            <button className="btn">Salvar</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default perfil;
