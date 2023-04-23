import React from 'react';
import './livro.css';
import {FaCheckCircle, FaHeart, FaPlusSquare, FaRegStar} from "react-icons/fa";

class BookPage extends React.Component {
  render() {
    return (
    <div className='container-pag-livro'>
        <div className="img-container">
        <img src='https://picsum.photos/1280/720?random=53' className='background-img'/>
        <img src='https://picsum.photos/1280/720?random=53' className='foreground-img'/>
        </div>

        <div className='painel-livro-container'>
          <span className='titulo-livro'>Fundamentos da Matemática Elementar: Conjuntos e Funções</span>
          <div className='container-i-livro'>
            <div className='i-leg'>
            <button><FaCheckCircle className='i-livro'/></button>
              Já li
            </div>
            <div className='i-leg'>
              <button><FaHeart className='i-livro'/></button>
              Favoritos
            </div>
            <div className='i-leg'>
              <button><FaPlusSquare className='i-livro'/></button>
              Adicionar à lista
            </div>
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
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>

            <div className='container-tags'>
              <div className='container-tag'>
                <span>Tag 1</span>
              </div>
              <div className='container-tag'>
                <span>Tag 2</span>
              </div>
              <div className='container-tag'>
                <span>Tag 3</span>
              </div>
            </div>

            <div className='container-simi'>
              <span>Similares</span>
              <div className='container-livros-simi'>
                <img src='https://picsum.photos/160/220?random=58' className='img-simi'/>
                <img src='https://picsum.photos/160/220?random=54' className='img-simi'/>
                <img src='https://picsum.photos/160/220?random=55' className='img-simi'/>
              </div>
            </div>

            <div className='container-res'>
              <span>Resenhas</span>
            </div>
          </div>

          <hr className="linha-livro"/>

          <div className='container-tec-livro'>
            <div className='container-info-livro'>
              <img src='https://picsum.photos/100/100?random=51' className='img-edit'/> {/*Foto da editora*/}
              <span>Ano: </span>
              <span>Autor: </span>
              <span>Páginas: </span>
              <span>Idioma: </span>
              <span>Editora: </span>
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
    );
  }
}

export default BookPage;