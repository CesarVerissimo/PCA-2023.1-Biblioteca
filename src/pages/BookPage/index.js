import React,  { useEffect, useState } from 'react';
import './livro.css';
import {FaRegCheckCircle, FaRegHeart, FaRegPlusSquare, FaRegStar, FaUserCircle} from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Livro from '../../Assets/Capas/exibicao';
import Carousel from 'better-react-carousel';

function BookPage() {
  const [bookInfo, setBookInfo] = useState(null);
  const bookId = 'OL1248164W'; 

  useEffect(() => {
    const fetchBookInfo = async () => {
      try {
        const response = await axios.get(
          `https://openlibrary.org/works/${bookId}.json`
        );

        const bookData = response.data;

        setBookInfo(bookData);
      } catch (error) {
        console.error('Erro ao obter informações do livro:', error);
      }
    };

    fetchBookInfo();
  }, [bookId]);

  if (!bookInfo) {
    return <div>Carregando...</div>;
  }

  const title = bookInfo.title.replace("dais", "dois");
  const coverUrl = `https://covers.openlibrary.org/b/id/${bookInfo.covers?.[0]}-M.jpg`;
  const description = bookInfo.description.value.replace("a", "A").replace( "her", "Her").replace("v", "V").replace("f", "F");
  const subjects = bookInfo.subjects;
  const first_publish_date = bookInfo.first_publish_date;
  
    return (
    <div className='container-pag-livro'>
        <div className="img-container">
        <img src={coverUrl} className='background-img'/>
        <img src={coverUrl} className='foreground-img'/>
        </div>

        <div className='painel-livro-container'>
          <span className='titulo-livro'>{title}</span>
          <div className='container-i-livro'>

            <button data-tooltip="Já li"><FaRegCheckCircle className='i-livro'/>Já li</button>            
            <button data-tooltip="Adicionar aos favoritos"><FaRegHeart className='i-livro'/>Favoritos</button>
            <button data-tooltip="Adicionar à lista"><FaRegPlusSquare className='i-livro'/>Adicionar</button>

          </div>
          <div className='container-class-livro'>
            <span className='nota'>0.0</span>
            <span className='avas'>0 avaliações</span>
            <div className='container-user-class'>
            <span className='user-class'>Sua classificação:</span><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/>
            </div>
          </div>
        </div>

        <div className='container-total-livro'>

          <div className='container-sobre-livro'>
            <div className='container-resumo'>
              <span>{description}</span>
            </div>

            <div className='container-tags'>
              <Link className='tags'><div className='container-tag'>
                <span>{subjects[13]}</span>
              </div>
              </Link>
              <Link className='tags'><div className='container-tag'>
                <span>{subjects[4].replace("Mujeres", "Mulheres")}</span>
              </div>
              </Link>
              <Link className='tags'><div className='container-tag'>
                <span>{subjects[15]}</span>
              </div>
              </Link>
            </div>

            <div className='container-simi'>
              <span>Similares</span>
              <div className='container-livros-simi'>
              <Carousel cols={5} rows={1} gap={15}>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro className='img-livros-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro className='img-livros-autor'/></Link>
                                </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro className='img-livros-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro className='img-livros-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro className='img-livros-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro className='img-livros-autor'/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to="/bookpage"><Livro className='img-livros-autor'/></Link>
                            </Carousel.Item>
                </Carousel>
              </div>
            </div>

            <div className='container-res'>
              <span>0 Resenhas</span>
            
            <div className='container-user-res'>
              
              <FaUserCircle className='user-res'/>
              <Link to="/criar-conta#topo" className='link-res-conta'>
              <textarea className='res' placeholder='Escreva sua resenha'></textarea>
              </Link>
            </div>
            </div>
          </div>

        <div className='container-total-tec-livro'>
          <hr className="linha-livro"/>

          <div className='container-tec-livro'>
            <div className='container-info-livro'>
              <img src='https://picsum.photos/100/100?random=51' className='img-edit'/> {/*Foto da editora*/}
              <span>Ano: {first_publish_date}</span>
              <span>Autor: Jorge Amado</span>
              <span>Páginas: 395</span>
              <span>Idioma: português</span>
              <span>Editora: Editora Record</span>
            </div>

            <div className='container-sit'>
              <div>
                <span>0 leram</span>
              </div>
              <div>
                <span>0 lendo</span>
              </div>
              <div>
                <span>0 desejam</span>
              </div>
            </div>

            <div className='container-avals'>
              <span>Avaliações</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }

export default BookPage;