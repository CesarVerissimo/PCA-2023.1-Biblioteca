import React, {useEffect} from 'react';
import {useUser} from '@realm/react';

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
function UserApiKeys() {
  const user = useUser();
  async function createUserApiKey() {
    const apiKey = await user?.apiKeys.create('mySecretKey');
    // ...Do something with API key like save it
    // or share it with external service that authenticates
    // on user's behalf.
  }
  // ...
}