import React from 'react';
import Carousel from 'better-react-carousel';
import './multicarousel.css'
import { Link } from 'react-router-dom';

const CarEditoras = () => {
  return (
    <div>
    <Carousel cols={7} rows={1} gap={35}>
      
    <Carousel.Item >
        <Link to={'editpage'}><img className='editora' src="https://picsum.photos/600/600?random=1" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editpage'}><img className='editora' src="https://picsum.photos/800/600?random=2" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editpage'}><img className='editora' src="https://picsum.photos/800/600?random=3" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editpage'}><img className='editora' src="https://picsum.photos/800/600?random=4" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editpage'}><img className='editora' src="https://picsum.photos/800/600?random=5" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editpage'}><img className='editora' src="https://picsum.photos/800/600?random=6" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editpage'}><img className='editora' src="https://picsum.photos/800/600?random=7" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editpage'}><img className='editora' src="https://picsum.photos/800/600?random=8" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editpage'}><img className='editora' src="https://picsum.photos/800/600?random=9" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editpage'}><img className='editora' src="https://picsum.photos/800/600?random=10" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editpage'}><img className='editora' src="https://picsum.photos/800/600?random=11" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editpage'}><img className='editora' src="https://picsum.photos/800/600?random=12" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editpage'}><img className='editora' src="https://picsum.photos/800/600?random=13" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editpage'}><img className='editora' src="https://picsum.photos/800/600?random=14" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editpage'}><img className='editora' src="https://picsum.photos/800/600?random=15" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editpage'}><img className='editora' src="https://picsum.photos/800/600?random=16" /></Link>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarEditoras;