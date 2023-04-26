// If not in production
if (process.env.NODE_ENV !== "production")
    require('dotenv').config(); // .env file variables -> process.env

const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const cookieParser = require("cookie-parser");

const gk = require('./data/data-gk');
const sports = require('./data/data-sports');
const computer = require('./data/data-computer');
const maths = require('./data/data-maths');

// parse json request body
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Security
app.use(cors({ origin: true, credentials: true }));

app.get('/gk', (req, res) => {
    console.log('/gk')
    res.status(200).json(gk);
})

app.get('/sports', (req, res) => {
    console.log('/sports')
    res.status(200).json(sports);
})
app.get('/computer', (req, res) => {
    console.log('/computer')
    res.status(200).json(computer);
})
app.get('/maths', (req, res) => {
    console.log('/maths')
    res.status(200).json(maths);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
