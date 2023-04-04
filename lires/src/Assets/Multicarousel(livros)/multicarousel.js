import React from 'react';
import Carousel from 'better-react-carousel';
import './multicarousel.css'

const CarLivros= () => {
  return (
    <div className='carlivros'>
    <Carousel cols={7} rows={1} gap={15} >
      
    <Carousel.Item >
        <img className='livro' src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='livro' src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='livro' src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='livro' src="https://picsum.photos/800/600?random=4" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='livro' src="https://picsum.photos/800/600?random=5" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='livro' src="https://picsum.photos/800/600?random=6" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='livro' src="https://picsum.photos/800/600?random=7" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='livro' src="https://picsum.photos/800/600?random=8" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='livro' src="https://picsum.photos/800/600?random=9" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='livro' src="https://picsum.photos/800/600?random=10" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='livro' src="https://picsum.photos/800/600?random=11" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='livro' src="https://picsum.photos/800/600?random=12" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='livro' src="https://picsum.photos/800/600?random=13" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='livro' src="https://picsum.photos/800/600?random=14" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='livro' src="https://picsum.photos/800/600?random=15" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='livro' src="https://picsum.photos/800/600?random=16" />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarLivros;