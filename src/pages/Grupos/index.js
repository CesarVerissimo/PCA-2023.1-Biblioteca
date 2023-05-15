import {Link} from 'react-router-dom';
import './grupos.css';
import {FaUsers, FaCommentAlt, FaCalendarAlt} from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';

function Grupos(){
    return(
        <div className='pag-grupos'>
            
            <div className='div-titulo-grupos'>
                <span className='titulo-grupos'>Grupos Mais Populares</span>
            
                <Dropdown className="fil-grupos">
                <Dropdown.Toggle variant='' className="fil">
                    Mais populares
                </Dropdown.Toggle>
                
                <Dropdown.Menu className='drop-fil-grupos'>
                    <Dropdown.Item className='dropdown-fil-item' href="#">Mais populares</Dropdown.Item>
                    <Dropdown.Item className='dropdown-fil-item' href="#">A-Z</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            </div>

            <div className='card-grupo'>
                <Link className='link-card-grupo' to="../../grouppage">
                    <img
                    className='img-card-grupo'
                    src="https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_1280.jpg"
                    />
                    
                    <div className='info-grupo'>
                        <span className='titulo-grupo'>Clássicos</span>

                        <span className='desc-grupo'>Grupo para pessoas que apreciam os clássicos da literatura nacional e internacional.</span>
                    </div>
                    
                    <hr className='linha'/>

                    <div className='dados-grupo'>
                        <ul className='lista-grupo'>
                            <li><FaUsers className='i-mem'/>1536 membros</li>
                            <li><FaCommentAlt className='i-ass'/>289 assuntos</li>
                            <li><FaCalendarAlt className='i-cal'/>Criado em: 24/03/2023</li>
                        </ul>
                        
                    </div>
                </Link>
            </div>

            <div className='card-grupo'>
                <Link className='link-card-grupo' to="../../grouppage">
                    <img
                    className='img-card-grupo'
                    src="https://s03.s3c.es/imag/businessinsider/2013/08/07/13-reasons-why-everyone-is-obsessed-with-breaking-bad.jpg"
                    />
                    
                    <div className='info-grupo'>
                        <span className='titulo-grupo'>Química do Mal</span>

                        <span className='desc-grupo'>Grupo voltado para pessoas que têm interesse em química no geral, 
                            mas também abordamos assuntos especifícos como estequimetria.
                        </span>
                    </div>
                    
                    <hr className='linha'/>

                    <div className='dados-grupo'>
                        <ul className='lista-grupo'>
                            <li><FaUsers className='i-mem'/>1836 membros</li>
                            <li><FaCommentAlt className='i-ass'/>299 assuntos</li>
                            <li><FaCalendarAlt className='i-cal'/>Criado em: 27/03/2023</li>
                        </ul>
                        
                    </div>
                </Link>
            </div>

            <div className='card-grupo'>
                <Link className='link-card-grupo' to="#">
                    <img
                    className='img-card-grupo'
                    src="https://cdn.blog.estrategiavestibulares.com.br/vestibulares/wp-content/uploads/2021/11/yellow-g47f3ed2c6_1280-1.jpg"
                    />
                    
                    <div className='info-grupo'>
                        <span className='titulo-grupo'>Amantes de números</span>

                        <span className='desc-grupo'>Lugar para pessoas loucas por matemática e que gostam de serem desafiadas.</span>
                    </div>
                    
                    <hr className='linha'/>

                    <div className='dados-grupo'>
                        <ul className='lista-grupo'>
                            <li><FaUsers className='i-mem'/>1116 membros</li>
                            <li><FaCommentAlt className='i-ass'/>256 assuntos</li>
                            <li><FaCalendarAlt className='i-cal'/>Criado em: 22/03/2023</li>
                        </ul>
                        
                    </div>
                </Link>
            </div>

            <div className='card-grupo'>
                <Link className='link-card-grupo' to="#">
                    <img
                    className='img-card-grupo'
                    src="https://cmspim.cogna.digital/unopar/public/2019-11/curso-historia.jpg"
                    />
                    
                    <div className='info-grupo'>
                        <span className='titulo-grupo'>Hora da História</span>

                        <span className='desc-grupo'>Grupo para quem gosta de explorar o passado para compreender melhor o presente e se preparar para o futuro.</span>
                    </div>
                    
                    <hr className='linha'/>

                    <div className='dados-grupo'>
                        <ul className='lista-grupo'>
                            <li><FaUsers className='i-mem'/>1066 membros</li>
                            <li><FaCommentAlt className='i-ass'/>229 assuntos</li>
                            <li><FaCalendarAlt className='i-cal'/>Criado em: 20/03/2023</li>
                        </ul>
                        
                    </div>
                </Link>
            </div>

            <div className='card-grupo'>
                <Link className='link-card-grupo' to="#">
                    <img
                    className='img-card-grupo'
                    src="https://pbs.twimg.com/profile_images/1607641823802974209/zU75D0Vy_400x400.jpg"
                    />
                    
                    <div className='info-grupo'>
                        <span className='titulo-grupo'>Biologia da Galera</span>

                        <span className='desc-grupo'>Grupo destinado à pessoas que gostam e querem aprender biologia.</span>
                    </div>
                    
                    <hr className='linha'/>

                    <div className='dados-grupo'>
                        <ul className='lista-grupo'>
                            <li><FaUsers className='i-mem'/>1566 membros</li>
                            <li><FaCommentAlt className='i-ass'/>279 assuntos</li>
                            <li><FaCalendarAlt className='i-cal'/>Criado em: 27/02/2023</li>
                        </ul>
                        
                    </div>
                </Link>
            </div>

            <div className='card-grupo'>
                <Link className='link-card-grupo' to="#">
                    <img
                    className='img-card-grupo'
                    src="https://fazendariogrande.pr.gov.br/wp-content/uploads/2020/02/artes-2.jpg"
                    />
                    
                    <div className='info-grupo'>
                        <span className='titulo-grupo'>Arte em ação</span>

                        <span className='desc-grupo'>Esse grupo é para aqueles apaixonados pela arte e sua história.</span>
                    </div>
                    
                    <hr className='linha'/>

                    <div className='dados-grupo'>
                        <ul className='lista-grupo'>
                            <li><FaUsers className='i-mem'/>1226 membros</li>
                            <li><FaCommentAlt className='i-ass'/>214 assuntos</li>
                            <li><FaCalendarAlt className='i-cal'/>Criado em: 23/03/2023</li>
                        </ul>
                        
                    </div>
                </Link>
            </div>

            <div className='card-grupo'>
                <Link className='link-card-grupo' to="#">
                    <img
                    className='img-card-grupo'
                    src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2023/03/representacao-de-varios-assuntos-da-fisica-uma-das-ciencias-da-natureza.jpg"
                    />
                    
                    <div className='info-grupo'>
                        <span className='titulo-grupo'>Físico Turistas</span>

                        <span className='desc-grupo'>Se você quer saber mais sobre as leis que regem o Universo e tem vontade em aprender cada vez mais, esse grupo é pra você!</span>
                    </div>
                    
                    <hr className='linha'/>

                    <div className='dados-grupo'>
                        <ul className='lista-grupo'>
                            <li><FaUsers className='i-mem'/>1065 membros</li>
                            <li><FaCommentAlt className='i-ass'/>193 assuntos</li>
                            <li><FaCalendarAlt className='i-cal'/>Criado em: 11/03/2023</li>
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

export default Grupos;