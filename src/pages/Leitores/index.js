import { Link } from "react-router-dom";
import './leitores.css'
import {FaCrown, FaUserFriends, FaBook} from "react-icons/fa";

function Leitores(){
    return(
        <div className='pag-leitor'>

            <div className='card-leitor'>
                <Link className='link-card-leitor' to="#">
                    <img
                    className='img-card-leitor'
                    src="https://picsum.photos/180/180?random=25"
                    />
                    <div className='info-leitor'>
                        <ul className='lista-leitor'>
                            <li className='nome-leitor'>Ronaldo Cabral</li>
                            <li><FaBook className='i-lidos'/>138 livros lidos</li>
                            <li><FaCrown className='i-rank'/>2895 Profissional</li>
                            <li><FaUserFriends className='i-seg'/>1667 seguidores</li>
                        </ul>
                    </div>
                </Link>
            </div>
            <div className='card-leitor'>
                <Link className='link-card-leitor' to="#">
                    <img
                    className='img-card-leitor'
                    src="https://picsum.photos/180/180?random=24"
                    />
                    <div className='info-leitor'>
                        <ul className='lista-leitor'>
                            <li className='nome-leitor'>Ronaldo Cabral</li>
                            <li><FaBook className='i-lidos'/>138 livros lidos</li>
                            <li><FaCrown className='i-rank'/>2895 Profissional</li>
                            <li><FaUserFriends className='i-seg'/>1667 seguidores</li>
                        </ul>
                    </div>
                </Link>
            </div>
            <div className='card-leitor'>
                <Link className='link-card-leitor' to="#">
                    <img
                    className='img-card-leitor'
                    src="https://picsum.photos/180/180?random=22"
                    />
                    <div className='info-leitor'>
                        <ul className='lista-leitor'>
                            <li className='nome-leitor'>Ronaldo Cabral</li>
                            <li><FaBook className='i-lidos'/>138 livros lidos</li>
                            <li><FaCrown className='i-rank'/>2895 Profissional</li>
                            <li><FaUserFriends className='i-seg'/>1667 seguidores</li>
                        </ul>
                    </div>
                </Link>
            </div>
            <div className='card-leitor'>
                <Link className='link-card-leitor' to="#">
                    <img
                    className='img-card-leitor'
                    src="https://picsum.photos/180/180?random=23"
                    />
                    <div className='info-leitor'>
                        <ul className='lista-leitor'>
                            <li className='nome-leitor'>Ronaldo Cabral</li>
                            <li><FaBook className='i-lidos'/>138 livros lidos</li>
                            <li><FaCrown className='i-rank'/>2895 Profissional</li>
                            <li><FaUserFriends className='i-seg'/>1667 seguidores</li>
                        </ul>
                    </div>
                </Link>
            </div>
            <div className='card-leitor'>
                <Link className='link-card-leitor' to="#">
                    <img
                    className='img-card-leitor'
                    src="https://picsum.photos/180/180?random=27"
                    />
                    <div className='info-leitor'>
                        <ul className='lista-leitor'>
                            <li className='nome-leitor'>Ronaldo Cabral</li>
                            <li><FaBook className='i-lidos'/>138 livros lidos</li>
                            <li><FaCrown className='i-rank'/>2895 Profissional</li>
                            <li><FaUserFriends className='i-seg'/>1667 seguidores</li>
                        </ul>
                    </div>
                </Link>
            </div>
            <div className='card-leitor'>
                <Link className='link-card-leitor' to="#">
                    <img
                    className='img-card-leitor'
                    src="https://picsum.photos/180/180?random=28"
                    />
                    <div className='info-leitor'>
                        <ul className='lista-leitor'>
                            <li className='nome-leitor'>Ronaldo Cabral</li>
                            <li><FaBook className='i-lidos'/>138 livros lidos</li>
                            <li><FaCrown className='i-rank'/>2895 Profissional</li>
                            <li><FaUserFriends className='i-seg'/>1667 seguidores</li>
                        </ul>
                    </div>
                </Link>
            </div>
            <div className='card-leitor'>
                <Link className='link-card-leitor' to="#">
                    <img
                    className='img-card-leitor'
                    src="https://picsum.photos/180/180?random=28"
                    />
                    <div className='info-leitor'>
                        <ul className='lista-leitor'>
                            <li className='nome-leitor'>Ronaldo Cabral</li>
                            <li><FaBook className='i-lidos'/>138 livros lidos</li>
                            <li><FaCrown className='i-rank'/>2895 Profissional</li>
                            <li><FaUserFriends className='i-seg'/>1667 seguidores</li>
                        </ul>
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

export default Leitores;