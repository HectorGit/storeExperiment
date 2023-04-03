const express = require("express");
const patchrouter = express.Router();
const fs = require('fs')

patchrouter.patch("/update_product/:product_id", (req, res) => 
    {
        return res.status(200).send("UpdatedProduct")
    }
);

module.exports = patchrouter;