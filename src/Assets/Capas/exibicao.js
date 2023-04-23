import React from 'react';
import {obterCapaLivroAleatorio} from './selecao';
import './imgscarousel.css';

class Livro extends React.Component {
  constructor(props) {
    super(props);
    this.state = { capaUrl: '' }; 
  }

  async componentDidMount() {
    const capaUrl = await obterCapaLivroAleatorio();
    this.setState({ capaUrl });
  }
  
  render() {
    return (
      <div>
        <img src={this.state.capaUrl} alt="Capa do Livro" className='capa-img'/>
      </div>
    );
  }
}

export default Livro;
