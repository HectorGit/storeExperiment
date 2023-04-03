const express = require("express");
const postrouter = express.Router();
const fs = require('fs')

/**
 * The body will contain : {
 * 
 * 
        productName: STRING,
        productOwnerName: STRING,
        Developers: ARRAY of STRING
        scrumMasterName: STRING,
        startDate: STRING IN THE FORM "YYYY/MM/DD",
        methodology: STRING 
 * 
 * }
 */
postrouter.post("/add_product",
    async(req,res) => {
        return res.status(200).send("StoredProduct")
    }
);

module.exports = postrouter;