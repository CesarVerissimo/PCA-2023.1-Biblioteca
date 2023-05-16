const express = require ('express');
const router = express.Router();

// TODO: adicionar novo ponto de interesse
exports.add = function (req, res) {
    res.send({type: 'POST'});
  };// TODO: atualizar ponto de interesse
  exports.update = function (req, res) {
    res.send({type: 'PUT'});
  };// TODO: apagar ponto de interesse
  exports.delete = function (req, res) {
    res.send({type: 'DELETE'});
  };