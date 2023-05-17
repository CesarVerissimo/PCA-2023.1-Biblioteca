import axios from 'axios';

async function obterLivrosEducativos() {
    try {
    const res = await axios.get('http://openlibrary.org/subjects/textbooks.json?limit=137');
    const livros = res.data.works;
    return livros;
  } catch (err) {
    console.log(err);
  }
  }

async function obterLivroAleatorio() {
    try {
    const livros = await obterLivrosEducativos();
    const indice = Math.floor(Math.random() * livros.length);
    const livro = livros[indice];
    return livro;
  } catch (err) {
    console.log(err);
  }
}

export async function obterCapaLivroAleatorio() {
    try {
    const livro = await obterLivroAleatorio();
    const capaUrl = `https://covers.openlibrary.org/b/id/${livro.cover_id}-L.jpg`;
    return capaUrl;
  } catch (err) {
    console.log(err);
  }
  }
