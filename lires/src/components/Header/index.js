import './header.css';
import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import {FaUserCircle} from "react-icons/fa";

 
function Header(){
    return(
        <header>
            <Link className='logo' to="/">Lires</Link>
            
            <Dropdown className="navegar">
                <Dropdown.Toggle variant='' className="navegar">
                    Navegar
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Portugês</Dropdown.Item>
                    <Dropdown.Item href="#">Matemática</Dropdown.Item>
                    <Dropdown.Item href="#">Biologia</Dropdown.Item>
                    <Dropdown.Item href="#">Colocar mais coisa</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Link className='botoes-header' to="/autores">Autores</Link>
            <Link className='botoes-header' to="/editoras">Editoras</Link>
            <Link className='botoes-header' to="/leitores">Leitores</Link>
            <Link className='botoes-header' to="/grupos">Grupos</Link>

            <input type='search' placeholder='Buscar por livros,autor, editora, disciplina,...' className='pesquisa'/>

            <Dropdown className="navegar">
                <Dropdown.Toggle variant='' className="navegar">
                <FaUserCircle className='user'/>
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                    <Dropdown.Item href="/criar-conta">Criar Conta</Dropdown.Item>
                    <Dropdown.Item href="/login">Login</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </header>
    );
}

export default Header;