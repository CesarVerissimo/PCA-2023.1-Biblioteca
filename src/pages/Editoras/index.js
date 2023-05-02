import {Link} from 'react-router-dom';
import './editoras.css';
import {FaBookReader, FaUserFriends, FaBook, FaPen} from "react-icons/fa";
import Livro from '../../Assets/Capas/exibicao';

function Editoras(){
    return(
        <div className='pag-editora'>

            <div className='card-editora'>
                <Link className='link-card-editora' to="/editoras/editpage">
                    <img
                    className='img-card-editora'
                    src="https://picsum.photos/180/180?random=25"
                    />
                    <div className='info-editora'>
                        <ul className='lista-editora'>
                            <li className='nome-editora'>Editora Atual</li>
                            <li><FaBook className='i-pub'/>138 livros</li>
                            <li><FaBookReader className='i-leit'/>2895 leitores</li>
                            <li><FaUserFriends className='i-seg'/>1667 seguidores</li>
                            <li><FaPen className='i-esc'/>156 escritores</li>
                        </ul>
                    </div>
                    <div className='container-livros-edit-card'>
                        <Livro/>
                        <Livro/>
                        <Livro/>
                    </div>
                </Link>
            </div>

            <div className='card-editora'>
                <Link className='link-card-editora' to="/editoras/editpage">
                    <img
                    className='img-card-editora'
                    src="https://picsum.photos/180/180?random=24"
                    />
                    <div className='info-editora'>
                        <ul className='lista-editora'>
                            <li className='nome-editora'>Editora do Brasil</li>
                            <li><FaBook className='i-pub'/>138 livros</li>
                            <li><FaBookReader className='i-leit'/>2895 leitores</li>
                            <li><FaUserFriends className='i-seg'/>1667 seguidores</li>
                            <li><FaPen className='i-esc'/>156 escritores</li>
                        </ul>
                    </div>
                    <div className='container-livros-edit-card'>
                        <Livro/>
                        <Livro/>
                        <Livro/>
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
    )
}

export default Editoras;