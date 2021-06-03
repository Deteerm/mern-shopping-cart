const express = require("express");
const router = express.Router();

//@desc   GET all products from db
//@routes GET /api/products
//@access Public
router.get("/", (req, res) => {});

//@desc   GET a product from db
//@routes GET /api/products/:id
//@access Public
router.get("/:id", (req, res) => {});

module.exports = router;
