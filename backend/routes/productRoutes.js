const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productsController");

//@desc   GET all products from db
//@routes GET /api/products
//@access Public
router.get("/", getAllProducts);

//@desc   GET a product by id from db
//@routes GET /api/products/:id
//@access Public
router.get("/:id", getProductById);

module.exports = router;
