import React from 'react';
import './authorpage.css';
import { Link } from 'react-router-dom';
import {FaRegStar, FaBook, FaBookReader, FaUserFriends, FaThumbsUp} from "react-icons/fa";
import Livro from '../../Assets/Capas/exibicao';
import Carousel from 'better-react-carousel';
import RandomUsers from '../../Assets/RandomUsers';

class AuthorPage extends React.Component {
    render() {
      return (
        <div className="container-total-autor">
            <div className="container-tec-autor">
                <div className="container-img-autor">
                    <img src="https://covers.openlibrary.org/a/id/7236303-M.jpg"/>
                    <span>0.0</span>
                </div>

                <div className='container-class-autor'>
                    <FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/>
                </div>

                <div className='container-info-autor'>
                    <span><FaBook className='i-info-autor'/>0 livros puplicados</span>
                    <span><FaBookReader className='i-info-autor'/>0 leitores</span>
                    <span><FaUserFriends className='i-info-autor'/>0 seguidores</span>
                </div>
            </div>
            <div container-geral-autor>
                <div className='container-nome-autor'>
                    <span>Nome do Autor</span> 
                    <button><FaThumbsUp className='i-like-autor'/></button>
                </div>

                <div className='container-bio-autor'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                
                <div className='container-total-livros-lidos'>
                    <span className='quant-livros-lidos'><FaBook className='i-info-autor'/>0 livros publicados</span>
                    <div className='container-livros-lidos'>
                        <Carousel cols={3} rows={3} gap={15}>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro className='img-livros-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro className='img-livros-autor'/></Link>
                                </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro className='img-livros-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro className='img-livros-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro className='img-livros-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro className='img-livros-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro className='img-livros-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro className='img-livros-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro className='img-livros-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro className='img-livros-autor'/></Link>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

                <div className='container-segs-aval-autor'>
                    <div className='container-segs-autor'>
                        <span><FaUserFriends className='i-info-autor'/>0 seguidores</span>
                        <div className='container-seg-autor'>
                                    <Link to={'#'}><RandomUsers/></Link>
                                    <Link to={'#'}><RandomUsers/></Link>
                                    <Link to={'#'}><RandomUsers/></Link>
                                    <Link to={'#'}><RandomUsers/></Link>
                                    <Link to={'#'}><RandomUsers/></Link>
                                    <Link to={'#'}><RandomUsers/></Link>
                                    <Link to={'#'}><RandomUsers/></Link>
                                    <Link to={'#'}><RandomUsers/></Link>
                        </div>
                    </div>

                    <div>Avaliações</div>
                </div>
            </div>
        </div>

      );
    }
}

export default AuthorPage;