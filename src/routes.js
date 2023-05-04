import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Autores from './pages/Autores';
import Header from './components/Header';
import Footer from './components/Footer';
import Copyright from './components/Footer/copyright';
import Editoras from './pages/Editoras';
import Grupos from './pages/Grupos';
import Leitores from './pages/Leitores';
import BookPage from './pages/BookPage';
import AuthorPage from './pages/AuthorPage';
import EditPage from './pages/EditPage';
import UsersPage from './pages/UsersPage';
import GroupPage from './pages/GroupPage';
import Livros from './pages/Livros';
import Login from './pages/Login/Login';
import Registro from './pages/Registro/Registro';

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
                <Route path="/bookpage" element={<BookPage/>}/>
                <Route path="autores/authorpage" element={<AuthorPage/>}/>
                <Route path="editoras/editpage" element={<EditPage/>}/>
                <Route path="leitores/userpage" element={<UsersPage/>}/>
                <Route path="grupos/grouppage" element={<GroupPage/>}/>
                <Route path="livros" element={<Livros/>}/>
                <Route path="/login" element = {<Login/>}/>
                <Route path="/criar-conta" element = {<Registro/>}/>
            </Routes>
        <Footer/>
        <Copyright/>
        </BrowserRouter>
    );
}

export default RoutesApp;