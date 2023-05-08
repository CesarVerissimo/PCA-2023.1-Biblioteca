import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import './home.css';
import CarLivros from '../../Assets/Multicarousel(livros)/multicarousel';
import CarAutores from '../../Assets/Multicarousel(autores)/multicarousel';
import CarEditoras from '../../Assets/Multicarousel(editoras)/multicarousel';
import BookPage from '../BookPage';
import {Link} from 'react-router-dom';
import Poster1 from '../../Assets/Imagens/Frame 1.png'
import Poster2 from '../../Assets/Imagens/Frame 2.png'
import Poster3 from '../../Assets/Imagens/Frame 3.png'

function Home(){

    return(
        <div className='div-home'>
          <div className='space'>
          <Carousel variant='dark' className='carrossel'>
            
            <Carousel.Item interval={3500}>
              <Link to="/criar-conta"><img 
                className='painel'
                src={Poster1}
                alt="Image 1"
              /></Link>
            </Carousel.Item>
            <Carousel.Item interval={3500}>
              <img 
                className='painel'
                src={Poster2}
                alt="Image 2"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className='painel' 
                src={Poster3}
                alt="Image 3"
              />
            </Carousel.Item>
          </Carousel>
          </div>

          <div className='container-livros'>Livros em destaque</div>
          <div><CarLivros/></div>
          <div className='container-livros'>Últimos lançamentos</div>
          <div><CarLivros/></div>
          <div className='container-livros'>Mais procurados do mês</div>
          <div><CarLivros/></div>
          
          <div className='container-livros'>Escolha por autor</div>
          <div><CarAutores/></div>
          
          <div className='container-livros'>Editoras de renome</div>
          <div><CarEditoras/></div>

        </div>
    )
}

export default Home;