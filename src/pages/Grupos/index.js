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
                <Link className='link-card-grupo' to="grouppage">
                    <img
                    className='img-card-grupo'
                    src="https://picsum.photos/180/180?random=25"
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
                <Link className='link-card-grupo' to="#">
                    <img
                    className='img-card-grupo'
                    src="https://picsum.photos/180/180?random=29"
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
                            <li><FaUsers className='i-mem'/>1536 membros</li>
                            <li><FaCommentAlt className='i-ass'/>289 assuntos</li>
                            <li><FaCalendarAlt className='i-cal'/>Criado em: 24/03/2023</li>
                        </ul>
                        
                    </div>
                </Link>
            </div>

            <div className='card-grupo'>
                <Link className='link-card-grupo' to="#">
                    <img
                    className='img-card-grupo'
                    src="https://picsum.photos/180/180?random=42"
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
                <Link className='link-card-grupo' to="#">
                    <img
                    className='img-card-grupo'
                    src="https://picsum.photos/180/180?random=24"
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
                <Link className='link-card-grupo' to="#">
                    <img
                    className='img-card-grupo'
                    src="https://picsum.photos/180/180?random=26"
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
                <Link className='link-card-grupo' to="#">
                    <img
                    className='img-card-grupo'
                    src="https://picsum.photos/180/180?random=27"
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