import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Autores from './pages/Autores';
import Header from './components/Header';
import Footer from './components/Footer';
import Copyright from './components/Footer/copyright';
import Editoras from './pages/Editoras';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/autores" element={<Autores/>}/>
                <Route path="/editoras" element={<Editoras/>}/>
            </Routes>
        <Footer/>
        <Copyright/>
        </BrowserRouter>
    );
}

export default RoutesApp;