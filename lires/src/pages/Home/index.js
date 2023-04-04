import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import './home.css';
import CarLivros from '../../Assets/Multicarousel(livros)/multicarousel';
import CarAutores from '../../Assets/Multicarousel(autores)/multicarousel';
import CarEditoras from '../../Assets/Multicarousel(editoras)/multicarousel';

function Home(){
    return(
        <div>
          <div className='space'>
          <Carousel variant='dark' className='carrossel'>
            <Carousel.Item interval={3000}>
              <img 
                className='painel'
                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                alt="Image 1"
              />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img 
                className='painel'
                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                alt="Image 2"
              />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img 
                className='painel'
                src="https://thumbs.dreamstime.com/b/carimbo-de-borracha-do-exemplo-84906823.jpg"
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