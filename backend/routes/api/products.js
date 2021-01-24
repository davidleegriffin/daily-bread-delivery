const express = require("express");
const asyncHandler = require("express-async-handler");

const { Product } = require("../../db/models");
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const result = await Product.findAll();
    const products = await result;
    // console.log("++++++++++++++++++++++++++++", products[0].dataValues);
    // products.forEach(product => console.log("+++++++++++++++++++++++", product.dataValues));
    
    res.send(products);
  }),
);

module.exports = router;