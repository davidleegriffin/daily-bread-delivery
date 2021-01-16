const express = require("express");
const asyncHandler = require("express-async-handler");

const { Product } = require("../../db/models");
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    // const { stockSymbol, shares, userId } = req.body;
    const products = await Product.findAll();
    console.log(products);
    return res.json({
      products,
    });
  }),
);

module.exports = router;