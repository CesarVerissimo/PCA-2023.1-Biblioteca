import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Autores from './pages/Autores';
import Header from './components/Header';
import Footer from './components/Footer';
import Copyright from './components/Footer/copyright';
import Editoras from './pages/Editoras';
import Grupos from './pages/Grupos';
import Leitores from './pages/Leitores';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/autores" element={<Autores/>}/>
                <Route path="/editoras" element={<Editoras/>}/>
                <Route path="/grupos" element={<Grupos/>}/>
                <Route path="/leitores" element={<Leitores/>}/>
            </Routes>
        <Footer/>
        <Copyright/>
        </BrowserRouter>
    );
}

export default RoutesApp;