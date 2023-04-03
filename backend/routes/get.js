
const express = require("express");
const getrouter = express.Router();
const fs = require('fs');

getrouter.get("/", (req, res) => {
    return res.status(200).send("Welcome to BCGOV API! 🌝");
});

getrouter.get("/products", 
    async (req, res) => {
        let rawdata = fs.readFileSync('products_data.json');
        let products = JSON.parse(rawdata);//not sure if this'll parse as an array
        console.log('GET /products');
        return res.status(200).send(products);
    }
);

module.exports = getrouter;