import {Link} from 'react-router-dom';
import './editoras.css';
import Livro from '../../Assets/Capas/exibicao';
import CardEditora from './editoras';

function Editoras(){
    return(
        <div className='pag-editora'>

            <div className='card-editora'>
                <Link className='link-card-editora' to="../../editpage">
                    <img
                    className='img-card-editora'
                    src="https://99prod.s3.amazonaws.com/uploads/535bc560-1d6d-43a9-af72-015433dc1109/1907945_783207491757562_4091518735231097132_n.png"
                    />
                    <div>
                        <ul className='lista-editora'>
                                <li className='nome-editora'>Editora Moderna</li>
                        </ul>
                    
                        <CardEditora/>
                    </div>
                    <div className='container-livros-edit-card'>
                        <Livro/>
                        <Livro/>
                        <Livro/>
                    </div>
                </Link>
            </div>


            <div className='card-editora'>
                <Link className='link-card-editora' to="../../editpage">
                    <img
                    className='img-card-editora'
                    src="https://www.coletivoleitor.com.br/wp-content/uploads/2018/09/editora-atual.png"
                    />
                    <div>
                        <ul className='lista-editora'>
                                <li className='nome-editora'>Editora Atual</li>
                        </ul>
                    
                        <CardEditora/>
                    </div>
                    <div className='container-livros-edit-card'>
                        <Livro/>
                        <Livro/>
                        <Livro/>
                    </div>
                </Link>
            </div>

            <div className='card-editora'>
                <Link className='link-card-editora' to="../../editpage">
                    <img
                    className='img-card-editora'
                    src="https://pbs.twimg.com/profile_images/1420756133745020940/w-HBIH6U_400x400.jpg"
                    />
                    <div>
                        <ul className='lista-editora'>
                                <li className='nome-editora'>Nova Fronteira</li>
                        </ul>
                    
                        <CardEditora/>
                    </div>
                    <div className='container-livros-edit-card'>
                        <Livro/>
                        <Livro/>
                        <Livro/>
                    </div>
                </Link>
            </div>

            <div className='card-editora'>
                <Link className='link-card-editora' to="../../editpage">
                    <img
                    className='img-card-editora'
                    src="https://logospng.org/download/saraiva/logo-saraiva-4096.png"
                    />
                    <div>
                        <ul className='lista-editora'>
                                <li className='nome-editora'>Saraiva</li>
                        </ul>
                    
                        <CardEditora/>
                    </div>
                    <div className='container-livros-edit-card'>
                        <Livro/>
                        <Livro/>
                        <Livro/>
                    </div>
                </Link>
            </div>

            <div className='card-editora'>
                <Link className='link-card-editora' to="../../editpage">
                    <img
                    className='img-card-editora'
                    src="https://i0.wp.com/ambition4clients.nl/wp-content/uploads/harpercollins.png?fit=500%2C500&ssl=1"
                    />
                    <div>
                        <ul className='lista-editora'>
                                <li className='nome-editora'>HarperCollins</li>
                        </ul>
                    
                        <CardEditora/>
                    </div>
                    <div className='container-livros-edit-card'>
                        <Livro/>
                        <Livro/>
                        <Livro/>
                    </div>
                </Link>
            </div>

            <div className='card-editora'>
                <Link className='link-card-editora' to="../../editpage">
                    <img
                    className='img-card-editora'
                    src="https://cdn.worldvectorlogo.com/logos/editora-abril.svg"
                    />
                    <div>
                        <ul className='lista-editora'>
                                <li className='nome-editora'>Abril</li>
                        </ul>
                    
                        <CardEditora/>
                    </div>
                    <div className='container-livros-edit-card'>
                        <Livro/>
                        <Livro/>
                        <Livro/>
                    </div>
                </Link>
            </div>

            <div className='card-editora'>
                <Link className='link-card-editora' to="../../editpage">
                    <img
                    className='img-card-editora'
                    src="https://i0.wp.com/oficinaeditorial.com.br/wp-content/uploads/2020/02/logo-editora-do-brasil.png?ssl=1"
                    />
                    <div>
                        <ul className='lista-editora'>
                                <li className='nome-editora'>Editora do Brasil</li>
                        </ul>
                    
                        <CardEditora/>
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