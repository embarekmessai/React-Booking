const express = require('express');
const bodyPareser = require('body-parser');

const server = express();

server.use(bodyPareser.json());

server.get('/', (req, res, next)=>{
    res.send(`<h1>Salam Alikoum</h1>`)
})

server.listen(3000);