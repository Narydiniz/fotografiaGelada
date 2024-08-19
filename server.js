const dotenv = require('dotenv')

dotenv.config();
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const db = require('./config/db')

const app = express ()

app.use(cors());
app.use(bodyParser.json());

const port = 3000 

app.get('/', (req,res)=>{
    res.send(' <h1>ALELUIA<h1>')
});

app.listen(port,()=>{
    console.log(`Servidor rodando http://localhost:${port}`)
});
