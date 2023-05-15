import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Coloquei como comentário só pra não ficar dando erro

/*const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/PCA-2023.1-Biblioteca', {useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
 console.log('connected to db')
}).catch((error) => {
 console.log(error)
});*/