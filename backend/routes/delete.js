const fs = require("fs");
const express = require("express");
const deleterouter = express.Router();

deleterouter.delete("/delete_product/:product_id",
    async(req,res) => {
        return res.status(200).send('DeletedProduct')
    }
);

module.exports = deleterouter;