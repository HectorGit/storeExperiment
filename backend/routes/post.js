const express = require("express");
const postrouter = express.Router();
const fs = require('fs')

postrouter.post("/add_product",
    async(req,res) => {
        return res.status(200).send("StoredProduct")
    }
);

module.exports = postrouter;