import {FaCrown, FaUserFriends, FaBook} from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function RandomUsers2() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=1')
      .then(response => response.json())
      .then(data => {
        const users = data.results;
        setUsers(users);
      })
      .catch(error => {
        console.error('Ocorreu um erro ao obter os usuários:', error);
      });
  }, []);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
            <div className='card-leitor'>
                <Link className='link-card-leitor' to="../../userpage">
                <img src={user.picture.large} alt="Foto do usuário" className='img-card-leitor'/>
                    <div className='info-leitor'>
                        <ul className='lista-leitor'>
                            <li className='nome-leitor'>{user.name.first} {user.name.last}</li>
                            <li><FaBook className='i-lidos'/>138 livros lidos</li>
                            <li><FaCrown className='i-rank'/>Profissional</li>
                            <li><FaUserFriends className='i-seg'/>1667 seguidores</li>
                        </ul>
                    </div>
                </Link>
            </div>
        </div>
      ))}
    </div>
  );
}

export default RandomUsers2;

