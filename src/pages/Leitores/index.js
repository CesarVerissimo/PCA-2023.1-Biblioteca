import './leitores.css'
import RandomUsers2 from "./leitores";

function Leitores(){
    return(
        <div className='pag-leitor'>

            <RandomUsers2/>
            <RandomUsers2/>
            <RandomUsers2/>
            <RandomUsers2/>
            <RandomUsers2/>
            <RandomUsers2/>
            <RandomUsers2/>
            

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