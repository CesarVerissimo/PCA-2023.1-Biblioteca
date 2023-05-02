import React from 'react';
import { Link } from 'react-router-dom';
import {FaStar, FaUsers, FaBook, FaCrown, FaUserFriends, FaThumbsUp, FaUser} from "react-icons/fa";
import './userspage.css';
import Carousel from 'better-react-carousel';
import Livro from '../../Assets/Capas/exibicao';

class UsersPage extends React.Component {
    render() {
      return (
        <div className="container-total-autor">
            <div className="container-tec-autor">
                <div className="container-img-autor">
                    <img src="https://www.pinkvilla.com/imageresize/vin_diesel_f9_memories_main.jpg?width=752&t=pvorg"/>
                </div>

                <div className='container-info-autor'>
                    <span><FaCrown className='i-info-autor'/>Ranking</span>
                    <span><FaBook className='i-info-autor'/>0 livros lidos</span>
                    <span><FaStar className='i-info-autor'/>0 favoritos</span>
                    <span><FaUserFriends className='i-info-autor'/>0 seguidores</span>
                    <span><FaUser className='i-info-autor'/>0 seguindo</span>
                </div>
            </div>
            <div container-geral-autor>
                <div className='container-nome-autor'>
                    <span>Nome do Usuário</span> 
                    <button><FaThumbsUp className='i-like-autor'/></button>
                </div>

                <div className='container-bio-autor'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                
                <div className='container-total-livros-lidos'>
                    <span className='quant-livros-lidos'><FaBook className='i-info-autor'/>0 livros lidos</span>
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
                                <Link to="#"><img src='https://picsum.photos/150/150?random=60' className='img-grupos-user'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/150/150?random=70'className='img-grupos-user'/></Link>
                                </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/150/150?random=8'className='img-grupos-user'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/150/150?random=5'className='img-grupos-user'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/150/150?random=58'className='img-grupos-user'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/150/150?random=59'className='img-grupos-user'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/150/150?random=21'className='img-grupos-user'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/150/150?random=2'className='img-grupos-user'/></Link>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

                <div className='container-total-livros-lidos'>
                    <span className='quant-livros-lidos'><FaUserFriends className='i-info-autor'/>0 seguidores</span>
                    <div className='container-livros-lidos'>
                        <Carousel cols={5} rows={3} gap={15}>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=8' className='img-seg-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=5'className='img-seg-autor'/></Link>
                                </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=82'className='img-seg-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=44'className='img-seg-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=42'className='img-seg-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=51'className='img-seg-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=11'className='img-seg-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=1'className='img-seg-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=3'className='img-seg-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=33'className='img-seg-autor'/></Link>
                            </Carousel.Item><Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=75'className='img-seg-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=58'className='img-seg-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=19'className='img-seg-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=91'className='img-seg-autor'/></Link>
                            </Carousel.Item><Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=55'className='img-seg-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=66'className='img-seg-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=77'className='img-seg-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=87'className='img-seg-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=7'className='img-seg-autor'/></Link>
                            </Carousel.Item><Carousel.Item>
                                <Link to="#"><img src='https://picsum.photos/100/100?random=10'className='img-seg-autor'/></Link>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

      );
    }
}

export default UsersPage;