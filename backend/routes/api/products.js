const express = require("express");
const asyncHandler = require("express-async-handler");

const { Product } = require("../../db/models");
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const { id } = req.body;
    console.log("id", id);
    const products = await Product.findByPk(id);
    console.log(products);
    return res.json({
      products,
    });
  }),
);

module.exports = router;