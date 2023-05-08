import './header.css';
import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import {FaUserCircle, FaSistrix} from "react-icons/fa"; 
import Logo from '../../Assets/Imagens/lires-logo.png'

function Header(){
    return(
        <header>
            <Link className='logo' to="/">
            <img src={Logo} className='logo-lires'/>
            <span>Lires</span>
            </Link>
            
            <Dropdown className="navegar">
                <Dropdown.Toggle variant='' className="navegar">
                    Navegar
                </Dropdown.Toggle>
                
                <Dropdown.Menu className='dropdown-nav'>
                    <Dropdown.Item className='dropdown-item' href="../livros">Português</Dropdown.Item>
                    <Dropdown.Item href="../livros" >Matemática</Dropdown.Item>
                    <Dropdown.Item href="../livros">História</Dropdown.Item>
                    <Dropdown.Item href="../livros">Geografia</Dropdown.Item>
                    <Dropdown.Item href="../livros">Biologia</Dropdown.Item>
                    <Dropdown.Item href="../livros">Química</Dropdown.Item>
                    <Dropdown.Item href="../livros">Física</Dropdown.Item>
                    <Dropdown.Item href="../livros">Filosofia</Dropdown.Item>
                    <Dropdown.Item href="../livros">Sociologia</Dropdown.Item>
                    <Dropdown.Item href="../livros">Inglês</Dropdown.Item>
                    <Dropdown.Item href="../livros">Infantil</Dropdown.Item>
                </Dropdown.Menu>

            </Dropdown>

            <Link className='botoes-header' to="/autores">Autores</Link>
            <Link className='botoes-header' to="/editoras">Editoras</Link>
            <Link className='botoes-header' to="/leitores">Leitores</Link>
            <Link className='botoes-header' to="/grupos">Grupos</Link>

            <div className='div-search'>
            <input type='search' placeholder='Buscar por livros,autor, editora, disciplina,...' className='pesquisa'/>
            <button type='button' className='btn-search'>
                <FaSistrix className='search'/>
            </button>
            </div>

            <Dropdown className="navegar">
                <Dropdown.Toggle variant='' className="navegar">
                <FaUserCircle className='user'/>
                </Dropdown.Toggle>
                
                <Dropdown.Menu className='dropdown-nav'>
                    <Dropdown.Item className='dropdown-item' href="/criar-conta">Criar Conta</Dropdown.Item>
                    <Dropdown.Item href="/login">Login</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </header>
    );
}

export default Header;