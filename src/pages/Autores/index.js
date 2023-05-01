import {Link} from 'react-router-dom';
import './autores.css';
import {FaBookReader, FaUserFriends, FaBook} from "react-icons/fa";
import Livro from '../../Assets/Capas/exibicao';

function Autores(){
    return(
        <div className='pag-autor'>

            <div className='card-autor'>
                <Link className='link-card-autor' to="authorpage">
                    <img
                    className='img-card-autor'
                    src="https://picsum.photos/180/180?random=25"
                    />
                    <div className='info-autor'>
                        <ul className='lista-autor'>
                            <li className='nome-autor'>Ziraldo Alves Pinto</li>
                            <li><FaBook className='i-pub'/>138 publicações</li>
                            <li><FaBookReader className='i-leit'/>2895 leitores</li>
                            <li><FaUserFriends className='i-seg'/>1667 seguidores</li>
                        </ul>
                    </div>
                    <div>
                    <img
                        className='img-card-livro'
                        src="https://picsum.photos/180/230?random=32"
                        />
                        <img
                        className='img-card-livro'
                        src="https://picsum.photos/180/230?random=31"
                        />
                        <img
                        className='img-card-livro'
                        src="https://picsum.photos/180/230?random=42"
                        />
                    </div>
                </Link>
            </div>
            <div className='btns-pags'>
                <button className='btn-pag'>1</button>
                <button className='btn-pag'>2</button>
                <button className='btn-pag'>3</button>
                <button className='btn-pag'>4</button>
                <button className='btn-pag'>5</button>
            </div>
        </div>
    );
}

export default Autores;