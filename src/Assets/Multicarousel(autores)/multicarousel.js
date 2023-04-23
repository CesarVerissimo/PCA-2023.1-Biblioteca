import React from 'react';
import Carousel from 'better-react-carousel';
import './multicarousel.css';
import { Link } from 'react-router-dom';

const CarAutores = () => {
  return (
    <div className='carautores'>
    <Carousel  cols={7} rows={1} gap={10}>
      
      <Carousel.Item>
        <Link to={'/authorpage'}><img className='autor' src="https://covers.openlibrary.org/a/id/11614857-M.jpg" /></Link>    
      </Carousel.Item>
      <Carousel.Item >
        <Link to={'/authorpage'}><img className='autor' src="https://covers.openlibrary.org/a/id/7236303-M.jpg" /></Link>   
      </Carousel.Item>
      <Carousel.Item>
        <Link><img className='autor' src="https://ia903000.us.archive.org/view_archive.php?archive=/3/items/m_covers_0008/m_covers_0008_78.tar&file=0008782767-M.jpg" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link><img className='autor' src="https://ia803000.us.archive.org/view_archive.php?archive=/3/items/m_covers_0008/m_covers_0008_56.tar&file=0008569287-M.jpg" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'/authorpage'}><img className='autor' src="https://covers.openlibrary.org/a/id/13011904-M.jpg" /></Link>    
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'/authorpage'}><img className='autor' src="https://covers.openlibrary.org/a/olid/OL93118A-M.jpg" /></Link>     
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'/authorpage'}><img className='autor' src="https://covers.openlibrary.org/a/olid/OL94828A-M.jpg" /></Link>      
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'/authorpage'}><img className='autor' src="https://covers.openlibrary.org/a/olid/OL18074A-M.jpg" /></Link>      
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'/authorpage'}><img className='autor' src="https://covers.openlibrary.org/a/olid/OL139548A-M.jpg" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'/authorpage'}><img className='autor' src="https://covers.openlibrary.org/a/olid/OL304969A-M.jpg" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'/authorpage'}><img className='autor' src="https://covers.openlibrary.org/a/olid/OL223954A-M.jpg" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'/authorpage'}><img className='autor' src="https://covers.openlibrary.org/a/olid/OL48230A-M.jpg" /></Link>      
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'/authorpage'}><img className='autor' src="https://covers.openlibrary.org/a/olid/OL93432A-M.jpg" /></Link>      
      </Carousel.Item>
      <Carousel.Item>
        <Link><img className='autor' src="https://ia903000.us.archive.org/view_archive.php?archive=/3/items/m_covers_0008/m_covers_0008_19.tar&file=0008198764-M.jpg" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'/authorpage'}><img className='autor' src="https://covers.openlibrary.org/a/olid/OL305422A-M.jpg" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'/authorpage'}><img className='autor' src="https://covers.openlibrary.org/a/olid/OL123449A-M.jpg" /></Link>

      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarAutores;