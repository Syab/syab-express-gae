const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { PORT } = require('./config');

const app = express();

app.use(cors());

app.get('/health', (req, res) => {
    res.json('Working OK!');
});

app.listen(PORT, () => {
    console.log(`Application Started on port ${PORT}!`);
});


module.exports = app;