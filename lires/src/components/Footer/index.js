import './footer.css';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className='div-footer'>
            <div className='lista-footer'>
            <span className='titulo-footer'>Lires</span>
            <Link className='link-footer' to="#">FAQ</Link>
            <Link className='link-footer' to="#">Fale Conosco</Link>
            <Link className='link-footer' to="#">Políticas de Privacidade</Link>
            <Link className='link-footer' to="#">Sobre nós</Link>
            </div>

            <div className='lista-footer'>
            <span className='titulo-footer'>Conta</span>
            <Link className='link-footer' to="#">Criar Conta</Link>
            <Link className='link-footer' to="#">Fazer Login</Link>
            </div>

            <div className='lista-footer'>
            <span className='titulo-footer'>Livros</span>
            <Link className='link-footer' to="#">Destaques</Link>
            <Link className='link-footer' to="#">Lançamentos</Link>
            <Link className='link-footer' to="#">Mais procurados</Link>
            <Link className='link-footer' to="#">A-Z</Link>
            </div>

            <div className='lista-footer'>
            <span className='titulo-footer'>Editoras</span>
            <Link className='link-footer' to="#">Populares</Link>
            <Link className='link-footer' to="#">Novidades</Link>
            <Link className='link-footer' to="#">A-Z</Link>
            </div>

            <div className='lista-footer'>
            <span className='titulo-footer'>Grupos</span>
            <Link className='link-footer' to="#">Populares</Link>
            <Link className='link-footer' to="#">A-Z</Link>
            </div>
        </div>
    )
}

export default Footer;