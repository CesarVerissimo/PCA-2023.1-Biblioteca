import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaStar, FaUsers, FaBook, FaCrown, FaUserFriends, FaThumbsUp, FaUser} from "react-icons/fa";
import Carousel from 'better-react-carousel';
import Livro from '../../Assets/Capas/exibicao';
import RandomUsers from '../../Assets/RandomUsers';

function UserPage() {
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
    <div className='container-pag-user'>
      {users.map((user, index) => (
        <div key={index} className='container-pag-user'>
        <div className="container-total-user">
        <div className="container-tec-autor">
            <div className="container-img-autor">
                <img src={user.picture.large} alt="Foto do usuário"/>
            </div>

            <div className='container-info-autor'>
                <span><FaCrown className='i-info-autor'/>Profissional</span>
                <span><FaBook className='i-info-autor'/>138 livros lidos</span>
                <span><FaStar className='i-info-autor'/>10 favoritos</span>
                <span><FaUserFriends className='i-info-autor'/>1667 seguidores</span>
                <span><FaUser className='i-info-autor'/>21 seguindo</span>
            </div>
        </div>
        <div container-geral-autor>
            <div className='container-nome-autor'>
                <span>{user.name.first} {user.name.last}</span> 
                <button><FaThumbsUp className='i-like-autor'/></button>
            </div>

            <div className='container-bio-autor'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            
            <div className='container-total-livros-lidos'>
                <span className='quant-livros-lidos'><FaBook className='i-info-autor'/>138 livros lidos</span>
                <div className='container-livros-lidos'>
                    <Carousel cols={3} rows={3} gap={15}>
                        <Carousel.Item>
                            <Link to="/bookpage"><Livro className='img-livros-autor'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bookpage"><Livro lassName='img-livros-autor'/></Link>
                            </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bookpage"><Livro lassName='img-livros-autor'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bookpage"><Livro lassName='img-livros-autor'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bookpage"><Livro lassName='img-livros-autor'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bookpage"><Livro lassName='img-livros-autor'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bookpage"><Livro lassName='img-livros-autor'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bookpage"><Livro lassName='img-livros-autor'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bookpage"><Livro lassName='img-livros-autor'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bookpage"><Livro lassName='img-livros-autor'/></Link>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <div className='container-total-livros-lidos'>
                <span className='quant-livros-lidos'><FaUsers className='i-info-autor'/>Grupos</span>
                <div className='container-livros-lidos'>
                    <Carousel cols={3} rows={1} gap={15}>
                        <Carousel.Item>
                            <Link to="../../grouppage"><img src='https://cmspim.cogna.digital/unopar/public/2019-11/curso-historia.jpg' className='img-grupos-user'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../grouppage"><img src='https://s03.s3c.es/imag/businessinsider/2013/08/07/13-reasons-why-everyone-is-obsessed-with-breaking-bad.jpg'className='img-grupos-user'/></Link>
                            </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../grouppage"><img src='https://pbs.twimg.com/profile_images/1607641823802974209/zU75D0Vy_400x400.jpg'className='img-grupos-user'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../grouppage"><img src='https://fazendariogrande.pr.gov.br/wp-content/uploads/2020/02/artes-2.jpg'className='img-grupos-user'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../grouppage"><img src='https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_1280.jpg'className='img-grupos-user'/></Link>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <div className='container-total-livros-lidos'>
                <span className='quant-livros-lidos'><FaUserFriends className='i-info-autor'/>1667 seguidores</span>
                <div className='container-livros-lidos'>
                    <Carousel cols={5} rows={3} gap={15}>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                            </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="#"><RandomUsers/></Link>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
    </div>
      ))}
    </div>
  );
}

export default UserPage;