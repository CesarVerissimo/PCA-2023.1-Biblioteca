import React, { useEffect, useState } from 'react';
import Livro from "../../Assets/Capas/exibicao";
import {FaBookReader, FaUserFriends, FaBook, FaPen} from "react-icons/fa";

function CardEditora() {
    const randomLivros = Math.floor(Math.random() * 351) + 100;
    const randomSegs = Math.floor(Math.random() * 2001) + 200;
    const randomLeit = Math.floor(Math.random() * 2001) + 200;
    const randomEsc = Math.floor(Math.random() * 121) + 20;



  return (
    <div className='pag-editora'>
        <div className='info-editora'>
                        <ul className='lista-editora'>
                            <li><FaBook className='i-pub'/>{randomLivros} livros</li>
                            <li><FaBookReader className='i-leit'/>{randomSegs} leitores</li>
                            <li><FaUserFriends className='i-seg'/>{randomLeit} seguidores</li>
                            <li><FaPen className='i-esc'/>{randomEsc} escritores</li>
                        </ul>
                    </div>
    </div>
  );
  };
  
  export default CardEditora;
