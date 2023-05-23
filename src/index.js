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
const axios = require('axios');
const express = require('express');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/PCA-2023.1-Biblioteca', {useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
 console.log('connected to db')
}).catch((error) => {
 console.log(error)
});

// TODO: listar pontos de interesse da BD
  exports.details = function (req, res) {
    res.send({type: 'GET'});
  };// TODO: adicionar novo ponto de interesse
  exports.add = function (req, res) {
    res.send({type: 'POST'});
  };// TODO: atualizar ponto de interesse
  exports.update = function (req, res) {
    res.send({type: 'PUT'});
  };// TODO: apagar ponto de interesse
  exports.delete = function (req, res) {
    res.send({type: 'DELETE'});
  };

var axios = require('axios');
var data = JSON.stringify({
    "collection": "Usuario",
    "database": "databasedeteste",
    "dataSource": "Clusterdeteste",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://sa-east-1.aws.data.mongodb-api.com/app/data-hqpuo/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'a3DmEFsA8qSIv9s7HlrXzG6q254IRSapfqgxXhwFbWQQTZy5Sl9W19F2ahpEFJSA',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
*/