import React from 'react';
import Carousel from 'better-react-carousel';
import './multicarousel.css'
import { Link } from 'react-router-dom';

const CarEditoras = () => {
  return (
    <div>
    <Carousel cols={7} rows={1} gap={35}>
      
    <Carousel.Item >
        <Link to={'editoras/editpage'}><img className='editora' src="https://99prod.s3.amazonaws.com/uploads/535bc560-1d6d-43a9-af72-015433dc1109/1907945_783207491757562_4091518735231097132_n.png"/></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editoras/editpage'}><img className='editora' src="https://www.coletivoleitor.com.br/wp-content/uploads/2018/09/editora-atual.png" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editoras/editpage'}><img className='editora' src="https://pbs.twimg.com/profile_images/1420756133745020940/w-HBIH6U_400x400.jpg" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editoras/editpage'}><img className='editora' src="https://logospng.org/download/saraiva/logo-saraiva-4096.png" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editoras/editpage'}><img className='editora' src="https://i0.wp.com/ambition4clients.nl/wp-content/uploads/harpercollins.png?fit=500%2C500&ssl=1" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editoras/editpage'}><img className='editora' src="https://cdn.worldvectorlogo.com/logos/editora-abril.svg" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editoras/editpage'}><img className='editora' src="https://i0.wp.com/oficinaeditorial.com.br/wp-content/uploads/2020/02/logo-editora-do-brasil.png?ssl=1" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editoras/editpage'}><img className='editora' src="https://logodownload.org/wp-content/uploads/2019/03/atica-logo-0.png" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editoras/editpage'}><img className='editora' src="https://www.smeducacao.com.br/wp-content/uploads/2018/07/cropped-LogoSM_Color.png" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editoras/editpage'}><img className='editora' src="https://yt3.googleusercontent.com/ytc/AGIKgqNTFmNqPGN8TKNCWfr6KNlnhM6jRsq-JXWwtLCXxA=s900-c-k-c0x00ffffff-no-rj" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editoras/editpage'}><img className='editora' src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032017/untitled-1_127.png?itok=33jNVwR3" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editoras/editpage'}><img className='editora' src="https://upload.wikimedia.org/wikipedia/pt/2/2b/Grupo_LeYa.jpg" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editoras/editpage'}><img className='editora' src="https://logodownload.org/wp-content/uploads/2019/04/scipione-logo-0.png" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editoras/editpage'}><img className='editora' src="https://media.licdn.com/dms/image/D4D0BAQFTagssfTXOlQ/company-logo_200_200/0/1662669621232?e=2147483647&v=beta&t=ID4VauaoHjejQx-EflIPqQ3upM4ZkPwXMxvJ1KVAGiQ" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editoras/editpage'}><img className='editora' src="https://4.bp.blogspot.com/-z2A8Cg26iKw/WORIGPmW9qI/AAAAAAAAAl0/Y6FItnud-xUXRkNigxfWHAuP9dpRFpQ-gCLcB/s1600/15283915_907557109345692_1840618420855789061_n.jpg" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={'editoras/editpage'}><img className='editora' src="https://img.ws.mms.shopee.com.br/e5d85e4171d1fd14018aa55488ff91fa" /></Link>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarEditoras;