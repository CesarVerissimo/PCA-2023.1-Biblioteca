import React from 'react';
import { Link } from 'react-router-dom';
import {FaUsers, FaBook, FaKey, FaUserFriends, FaThumbsUp, FaCalendarAlt} from "react-icons/fa";
import './grouppage.css';
import Livro from '../../Assets/Capas/exibicao';
import RandomUsers from '../../Assets/RandomUsers';

import Carousel from 'better-react-carousel';

class GroupPage extends React.Component {
    render() {
      return (
        <div className="container-total-autor">
            <div className="container-tec-autor">
                <div className="container-img-autor">
                    <img src="https://s03.s3c.es/imag/businessinsider/2013/08/07/13-reasons-why-everyone-is-obsessed-with-breaking-bad.jpg"/>
                </div>

                <div className='container-entrar'>
                    <button>Entrar</button>
                </div>

                <div className='container-info-autor'>
                    <span><FaUsers className='i-info-autor'/>0 membros</span>
                    <span><FaKey className='i-info-autor'/>Dono: Walter Branco</span>
                    <span><FaBook className='i-info-autor'/>0 livros</span>
                    <span><FaCalendarAlt className='i-info-autor'/>Criado em: data</span>
                </div>
            </div>
            <div container-geral-autor>
                <div className='container-nome-autor'>
                    <span>Nome do Grupo</span>
                    <button><FaThumbsUp className='i-like-autor'/></button>
                </div>

                <div className='container-bio-autor'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>

            <div className='container-tags'>
              <div className='container-tag'>
                <span>Tag 1</span>
              </div>
              <div className='container-tag'>
                <span>Tag 2</span>
              </div>
              <div className='container-tag'>
                <span>Tag 3</span>
              </div>
            </div>
                
            <div className='container-total-livros-lidos'>
                <span className='quant-livros-lidos'><FaUsers className='i-info-autor'/>0 membros</span>
                <div className='container-livros-lidos'>
                    <Carousel cols={5} rows={3} gap={15}>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                            </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item><Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="../../userpage"><RandomUsers/></Link>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <div className='container-total-livros-lidos'>
                <span className='quant-livros-lidos'><FaBook className='i-info-autor'/>0 livros relacionados</span>
                <div className='container-livros-lidos'>
                    <Carousel cols={3} rows={3} gap={15}>
                        <Carousel.Item>
                            <Link to="/bookpage"><Livro  className='img-livros-autor'/></Link>
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

            </div>
        </div>

      );
    }
}

export default GroupPage;