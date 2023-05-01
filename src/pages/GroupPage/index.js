import React from 'react';
import { Link } from 'react-router-dom';
import {FaUsers, FaBook, FaKey, FaUserFriends, FaThumbsUp, FaCalendarAlt} from "react-icons/fa";
import './grouppage.css';

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
                <span className='quant-livros-lidos'><FaUserFriends className='i-info-autor'/>0 membros</span>
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

            <div className='container-total-livros-lidos'>
                <span className='quant-livros-lidos'><FaBook className='i-info-autor'/>0 livros relacionados</span>
                <div className='container-livros-lidos'>
                    <Carousel cols={3} rows={3} gap={15}>
                        <Carousel.Item>
                            <Link to="/bookpage"><img src='https://picsum.photos/160/220?random=85' className='img-livros-autor'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bookpage"><img src='https://picsum.photos/160/220?random=86'className='img-livros-autor'/></Link>
                            </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bookpage"><img src='https://picsum.photos/160/220?random=87'className='img-livros-autor'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bookpage"><img src='https://picsum.photos/160/220?random=88'className='img-livros-autor'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bookpage"><img src='https://picsum.photos/160/220?random=89'className='img-livros-autor'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bookpage"><img src='https://picsum.photos/160/220?random=81'className='img-livros-autor'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bookpage"><img src='https://picsum.photos/160/220?random=82'className='img-livros-autor'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bookpage"><img src='https://picsum.photos/160/220?random=83'className='img-livros-autor'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bookpage"><img src='https://picsum.photos/160/220?random=84'className='img-livros-autor'/></Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/bookpage"><img src='https://picsum.photos/160/220?random=80'className='img-livros-autor'/></Link>
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