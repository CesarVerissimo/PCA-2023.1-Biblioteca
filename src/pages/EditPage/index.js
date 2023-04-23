import React from 'react';
import { Link } from 'react-router-dom';
import {FaRegStar, FaBook, FaBookReader, FaUserFriends, FaThumbsUp, FaPen, FaExternalLinkAlt} from "react-icons/fa";
import './editpage.css'

class EditPage extends React.Component {
    render() {
      return (
        <div className="container-total-autor">
            <div className="container-tec-edit">
                <div className="container-img-edit">
                    <img src="https://www.gm5.com.br/wp-content/uploads/2022/02/img-destaque-moderna-02.png"/>
                    <span>0.0</span>
                </div>

                <div className='container-class-autor'>
                    <FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/>
                </div>

                <div className='container-info-autor'>
                    <span><FaBook className='i-info-autor'/>0 livros puplicados</span>
                    <span><FaBookReader className='i-info-autor'/>0 leitores</span>
                    <span><FaUserFriends className='i-info-autor'/>0 seguidores</span>
                    <span><FaPen className='i-info-autor'/>0 autores</span>
                    <span><FaExternalLinkAlt className='i-info-autor'/>Site oficial</span>
                </div>
            </div>
            <div container-geral-autor>
                <div className='container-nome-autor'>
                    <span>Nome da Editora</span> 
                    <button><FaThumbsUp className='i-like-autor'/></button>
                </div>

                <div className='container-bio-autor'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                
                <div className='container-total-livros-pub'>
                    <span className='quant-livros-pub'>Últimos Lançamentos</span>
                    <div className='container-livros-pub'>
                        <Link to={'/bookpage'}><img src='https://picsum.photos/160/220?random=85' className='img-livros-autor'/></Link>
                        <Link to={'/bookpage'}><img src='https://picsum.photos/160/220?random=80' className='img-livros-autor'/></Link>
                        <Link to={'/bookpage'}><img src='https://picsum.photos/160/220?random=82' className='img-livros-autor'/></Link>
                        <Link to={'/bookpage'}><img src='https://picsum.photos/160/220?random=83' className='img-livros-autor'/></Link>
                        <Link to={'/bookpage'}><img src='https://picsum.photos/160/220?random=87' className='img-livros-autor'/></Link>
                        <Link to={'/bookpage'}><img src='https://picsum.photos/160/220?random=86' className='img-livros-autor'/></Link>
                        <Link to={'/bookpage'}><img src='https://picsum.photos/160/220?random=81' className='img-livros-autor'/></Link>
                        <Link to={'/bookpage'}><img src='https://picsum.photos/160/220?random=84' className='img-livros-autor'/></Link>
                        <Link to={'/bookpage'}><img src='https://picsum.photos/160/220?random=88' className='img-livros-autor'/></Link>
                        <Link to={'/bookpage'}><img src='https://picsum.photos/160/220?random=89' className='img-livros-autor'/></Link>
                    </div>
                </div>

                <div className='container-segs-aval-autor'>
                    <div className='container-segs-autor'>
                        <span><FaUserFriends className='i-info-autor'/>0 seguidores</span>
                        <div className='container-seg-autor'>
                                    <td><Link to={'#'}><img src='https://picsum.photos/100/100?random=85' className='img-seg-autor'/></Link></td>
                                    <td><Link to={'#'}><img src='https://picsum.photos/100/100?random=80' className='img-seg-autor'/></Link></td>
                                    <td><Link to={'#'}><img src='https://picsum.photos/100/100?random=82' className='img-seg-autor'/></Link></td>
                                    <td><Link to={'#'}><img src='https://picsum.photos/100/100?random=83' className='img-seg-autor'/></Link></td>
                                    <td><Link to={'#'}><img src='https://picsum.photos/100/100?random=86' className='img-seg-autor'/></Link></td>
                                    <td><Link to={'#'}><img src='https://picsum.photos/100/100?random=81' className='img-seg-autor'/></Link></td>
                                    <td><Link to={'#'}><img src='https://picsum.photos/100/100?random=84' className='img-seg-autor'/></Link></td>
                                    <td><Link to={'#'}><img src='https://picsum.photos/100/100?random=88' className='img-seg-autor'/></Link></td>
                        </div>
                    </div>

                    <div>Avaliações</div>
                </div>
            </div>
        </div>

      );
    }
}

export default EditPage;