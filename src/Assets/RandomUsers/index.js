import React, { useEffect, useState } from 'react';

function RandomUsers() {
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
          <img src={user.picture.large} alt="Foto do usuário" className='img-seg-autor'/>
        </div>
      ))}
    </div>
  );
}

export default RandomUsers;