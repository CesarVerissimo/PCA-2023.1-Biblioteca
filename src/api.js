const express = require ('express');
const cors = require ('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 3000;
const app = express();

// middleware
app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clusterdeteste.1ehvhav.mongodb.net/?retryWrites=true&w=majority';
console.log(uri);

import dotenv from "dotenv";
dotenv.config();

// setup root 
app.get('/', (req, res) => {
  res.send('Server is running...');
})

app.listen(port, () => {
  console.log('Listening to port ', port);
});