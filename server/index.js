require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(process.env.PORT);
console.log(`App is listening on port ${process.env.PORT}`);