import React from 'react';
import { Link } from 'react-router-dom';
import {FaRegStar, FaBook, FaBookReader, FaUserFriends, FaThumbsUp, FaPen, FaExternalLinkAlt} from "react-icons/fa";
import './editpage.css'
import Livro from '../../Assets/Capas/exibicao';
import Carousel from 'better-react-carousel';
import RandomUsers from '../../Assets/RandomUsers';

function EditPage() {
    const randomLivros = Math.floor(Math.random() * 351) + 100;
    const randomSegs = Math.floor(Math.random() * 2001) + 200;
    const randomLeit = Math.floor(Math.random() * 2001) + 200;
    const randomEsc = Math.floor(Math.random() * 121) + 20;
    const randomNota1 = Math.floor(Math.random() * 2) + 3;
    const randomNota2 = Math.floor(Math.random() * 9);

      return (
        <div className="container-total-autor">
            <div className="container-tec-edit">
                <div className="container-img-edit">
                    <img src="https://www.gm5.com.br/wp-content/uploads/2022/02/img-destaque-moderna-02.png"/>
                    <span>{randomNota1}.{randomNota2}</span>
                </div>

                <div className='container-class-autor'>
                    <FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/>
                </div>

                <div className='container-info-autor'>
                    <span><FaBook className='i-info-autor'/>{randomLivros} livros puplicados</span>
                    <span><FaBookReader className='i-info-autor'/>{randomLeit} leitores</span>
                    <span><FaUserFriends className='i-info-autor'/>{randomSegs} seguidores</span>
                    <span><FaPen className='i-info-autor'/>{randomEsc} autores</span>
                    <span><FaExternalLinkAlt className='i-info-autor'/>Site oficial</span>
                </div>
            </div>
            <div container-geral-autor>
                <div className='container-nome-autor'>
                    <span>Nome da Editora</span> 
                    <button><FaThumbsUp className='i-like-autor'/></button>
                </div>

                <div className='container-bio-autor'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                
                <div className='container-total-livros-lidos'>
                    <span className='quant-livros-lidos'><FaBook className='i-info-autor'/>{randomLivros} livros publicados</span>
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
                        <span><FaUserFriends className='i-info-autor'/>{randomSegs} seguidores</span>
                        <div className='container-seg-autor'>
                                    <td><Link to={'../../userpage'}><RandomUsers/></Link></td>
                                    <td><Link to={'../../userpage'}><RandomUsers/></Link></td>
                                    <td><Link to={'../../userpage'}><RandomUsers/></Link></td>
                                    <td><Link to={'../../userpage'}><RandomUsers/></Link></td>
                                    <td><Link to={'../../userpage'}><RandomUsers/></Link></td>
                                    <td><Link to={'../../userpage'}><RandomUsers/></Link></td>
                                    <td><Link to={'../../userpage'}><RandomUsers/></Link></td>
                                    <td><Link to={'../../userpage'}><RandomUsers/></Link></td>
                        </div>
                    </div>

                    <div>Avaliações</div>
                </div>
            </div>
        </div>

      );
};

export default EditPage;