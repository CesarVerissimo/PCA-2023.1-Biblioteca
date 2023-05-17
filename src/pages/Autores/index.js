import {Link} from 'react-router-dom';
import './autores.css';
import Livro from '../../Assets/Capas/exibicao';
import {FaBook} from "react-icons/fa";
import CardAutor from './autores';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Autores(){
    const [author1BooksCount, setAuthor1BooksCount] = useState(0);
    const [author2BooksCount, setAuthor2BooksCount] = useState(0);
    const [author3BooksCount, setAuthor3BooksCount] = useState(0);
    const [author4BooksCount, setAuthor4BooksCount] = useState(0);
    const [author5BooksCount, setAuthor5BooksCount] = useState(0);
    const [author6BooksCount, setAuthor6BooksCount] = useState(0);
    const [author7BooksCount, setAuthor7BooksCount] = useState(0);


    useEffect(() => {
        const fetchAuthorBooksCount = async (authorName, setBooksCount) => {
        try {
            const response = await axios.get(`https://openlibrary.org/search.json?author=${authorName}`);
            const data = response.data;
            const count = data?.numFound || 0;

            setBooksCount(count);
        } catch (error) {
            console.error('Ocorreu um erro ao obter o número de livros do autor:', error);
        }
        };

        fetchAuthorBooksCount('Jorge Amado', setAuthor1BooksCount);
        fetchAuthorBooksCount('Bertrand Russell', setAuthor2BooksCount);
        fetchAuthorBooksCount('Mauricio de Sousa', setAuthor3BooksCount);
        fetchAuthorBooksCount('Machado de Assis', setAuthor4BooksCount);
        fetchAuthorBooksCount('Jose Alencar', setAuthor5BooksCount);
        fetchAuthorBooksCount('Clarice Lispector', setAuthor6BooksCount);
        fetchAuthorBooksCount('Ariano Suassuna', setAuthor7BooksCount);
        

    }, []);

    return(
        <div className='pag-autor'>
            <><div className='card-autor'>
                    <Link className='link-card-autor' to="authorpage">
                        <img
                            className='img-card-autor'
                            src="https://covers.openlibrary.org/a/id/11614857-M.jpg"
                            alt='Jorge Amado' />
                        <div className='info-autor'>
                            <ul className='lista-autor'>
                                <li className='nome-autor'>Jorge Amado</li>
                                <li><FaBook className='i-pub'/>{author1BooksCount} livros</li>
                                <CardAutor/>
                            </ul>
                        </div>
                        <div className='container-livros-autor-card'>
                            <Livro />
                            <Livro />
                            <Livro />
                        </div>
                    </Link>
                </div><div className='card-autor'>
                        <Link className='link-card-autor' to="authorpage">
                            <img
                                className='img-card-autor'
                                src="https://covers.openlibrary.org/a/id/7236303-M.jpg"
                                alt='Bertrand Russell' />
                            <div className='info-autor'>
                                <ul className='lista-autor'>
                                    <li className='nome-autor'>Bertrand Russell</li>
                                    <li><FaBook className='i-pub'/>{author2BooksCount} livros</li>
                                    <CardAutor/>
                                </ul>
                            </div>
                            <div className='container-livros-autor-card'>
                                <Livro />
                                <Livro />
                                <Livro />
                            </div>
                        </Link>
                    </div><div className='card-autor'>
                        <Link className='link-card-autor' to="authorpage">
                            <img
                                className='img-card-autor'
                                src="https://ia903000.us.archive.org/view_archive.php?archive=/3/items/m_covers_0008/m_covers_0008_78.tar&file=0008782767-M.jpg"
                                alt='Maurício de Sousa' />
                            <div className='info-autor'>
                                <ul className='lista-autor'>
                                    <li className='nome-autor'>Maurício de Sousa</li>
                                    <li><FaBook className='i-pub'/>{author3BooksCount} livros</li>
                                    <CardAutor/>
                                </ul> 
                            </div>
                            <div className='container-livros-autor-card'>
                                <Livro />
                                <Livro />
                                <Livro />
                            </div>
                        </Link>
                    </div>

                    <div className='card-autor'>
                        <Link className='link-card-autor' to="authorpage">
                            <img
                                className='img-card-autor'
                                src="https://ia803000.us.archive.org/view_archive.php?archive=/3/items/m_covers_0008/m_covers_0008_56.tar&file=0008569287-M.jpg"
                                alt='Machado de Assis' />
                            <div className='info-autor'>
                                <ul className='lista-autor'>
                                    <li className='nome-autor'>Machado de Assis</li>
                                    <li><FaBook className='i-pub'/>{author4BooksCount} livros</li>
                                    <CardAutor/>
                                </ul>
                            </div>
                            <div className='container-livros-autor-card'>
                                <Livro />
                                <Livro />
                                <Livro />
                            </div>
                        </Link>
                    </div><div className='card-autor'>
                        <Link className='link-card-autor' to="authorpage">
                            <img
                                className='img-card-autor'
                                src="https://covers.openlibrary.org/a/id/13011904-M.jpg"
                                alt='José de Alencar' />
                            <div className='info-autor'>
                                <ul className='lista-autor'>
                                    <li className='nome-autor'>José de Alencar</li>
                                    <li><FaBook className='i-pub'/>{author5BooksCount} livros</li>
                                    <CardAutor/>
                                </ul>
                            </div>
                            <div className='container-livros-autor-card'>
                                <Livro />
                                <Livro />
                                <Livro />
                            </div>
                        </Link>
                    </div><div className='card-autor'>
                        <Link className='link-card-autor' to="authorpage">
                            <img
                                className='img-card-autor'
                                src="https://covers.openlibrary.org/a/olid/OL93118A-M.jpg"
                                alt='Clarice Lispector' />
                            <div className='info-autor'>
                                <ul className='lista-autor'>
                                    <li className='nome-autor'>Clarice Lispector</li>
                                    <li><FaBook className='i-pub'/>{author6BooksCount} livros</li>
                                    <CardAutor/>
                                </ul>
                            </div>
                            <div className='container-livros-autor-card'>
                                <Livro />
                                <Livro />
                                <Livro />
                            </div>
                        </Link>
                    </div><div className='card-autor'>
                        <Link className='link-card-autor' to="authorpage">
                            <img
                                className='img-card-autor'
                                src="https://covers.openlibrary.org/a/olid/OL94828A-M.jpg"
                                alt='Clarice Lispector' />
                            <div className='info-autor'>
                                <ul className='lista-autor'>
                                    <li className='nome-autor'>Ariano Suassuna</li>
                                    <li><FaBook className='i-pub'/>{author7BooksCount} livros</li>
                                    <CardAutor/>
                                </ul>
                            </div>
                            <div className='container-livros-autor-card'>
                                <Livro />
                                <Livro />
                                <Livro />
                            </div>
                        </Link>
                    </div><div className='btns-pags'>
                        <button className='btn-pag'>1</button>
                        <button className='btn-pag'>2</button>
                        <button className='btn-pag'>3</button>
                        <button className='btn-pag'>4</button>
                        <button className='btn-pag'>5</button>
                    </div></>
        </div>
    );
}

export default Autores;