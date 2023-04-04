import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Autores from './pages/Autores';
import Header from './components/Header';
import Footer from './components/Footer';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/autores" element={<Autores/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    );
}

export default RoutesApp;