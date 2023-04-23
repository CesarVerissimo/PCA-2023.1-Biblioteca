import Livro from '../Capas/exibicao';
import './multicarousel.css'
import Carousel from 'better-react-carousel';
import {Link} from 'react-router-dom';

const CarLivros= () => {

  return (
    <div className='carlivros'>
    <Carousel cols={7} rows={1} gap={15}>
      
    <Carousel.Item className='carousel-item'>
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
  )
}

export default CarLivros;