import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'better-react-carousel';
import './livros.css';
import Livro from '../../Assets/Capas/exibicao';

function Livros(){
    return(
        <div className='pag-livros'>
            
            <div className='div-titulo-livros'>
                <span className='titulo-grupos'>Livros Mais Populares</span>
            
                <Dropdown className="fil-grupos">
                <Dropdown.Toggle variant='' className="fil">
                    Mais populares
                </Dropdown.Toggle>
                
                <Dropdown.Menu className='drop-fil-grupos'>
                    <Dropdown.Item className='dropdown-fil-item' href="#">Mais populares</Dropdown.Item>
                    <Dropdown.Item className='dropdown-fil-item' href="#">A-Z</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>

            <div className='container-total-livros'>
                    
                    <div className='container-livros-pag'>
                        <Carousel cols={5} rows={4} gap={15}>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                                </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro/></Link>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

                <div className='btns-pags'>
                    <button className='btn-pag'>1</button>
                    <button className='btn-pag'>2</button>
                    <button className='btn-pag'>3</button>
                    <button className='btn-pag'>4</button>
                    <button className='btn-pag'>5</button>
            </div>
        </div>
    )}

export default Livros;