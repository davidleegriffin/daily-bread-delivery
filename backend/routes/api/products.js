const express = require("express");
const asyncHandler = require("express-async-handler");

const { Product } = require("../../db/models");
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const result = await Product.findAll();
    const products = await result;
    console.log(products);
    return products;
  }),
);

module.exports = router;