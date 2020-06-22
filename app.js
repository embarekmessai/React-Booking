const express = require('express');
const bodyPareser = require('body-parser');

const server = express();

server.use(bodyPareser.json());

server.listen(3000);