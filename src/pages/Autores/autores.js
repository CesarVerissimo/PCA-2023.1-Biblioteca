import React from 'react';
import {FaBookReader, FaUserFriends} from "react-icons/fa";

function CardAutor() {
    const randomSegs = Math.floor(Math.random() * 2001) + 200;
    const randomLeit = Math.floor(Math.random() * 2001) + 200;

  return (
    <div className='pag-autor'>
        <div className='info-autor'>
                        <ul className='lista-autor'>
                            <li><FaBookReader className='i-leit'/>{randomSegs} leitores</li>
                            <li><FaUserFriends className='i-seg'/>{randomLeit} seguidores</li>
                        </ul>
                    </div>
    </div>
        );
  };
  
  export default CardAutor;