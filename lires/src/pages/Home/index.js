import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import './home.css';
import CarLivros from '../../Assets/Multicarousel(livros)/multicarousel';
import CarAutores from '../../Assets/Multicarousel(autores)/multicarousel';
import CarEditoras from '../../Assets/Multicarousel(editoras)/multicarousel';

function Home(){
    return(
        <div className='div-home'>
          <div className='space'>
          <Carousel variant='dark' className='carrossel'>
            <Carousel.Item interval={3000}>
              <img 
                className='painel'
                src="https://picsum.photos/1280/720?random=1"
                alt="Image 1"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img 
                className='painel'
                src="https://picsum.photos/1280/720?random=2"
                alt="Image 2"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img 
                className='painel' 
                src="https://picsum.photos/1280/720?random=3" 
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