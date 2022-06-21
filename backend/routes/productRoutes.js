const express = require("express");

const router = express.Router();

const {
  getAllProduct,
  getAllProductById,
} = require("../controller/productController");
//@decs Get all product from db
//@router GET /api/products
//@access Public

router.get("/", getAllProduct);

//@decs Get all product by id from db
//@router GET /api/products/:id
//@access Public

router.get("/:id", getAllProductById);

module.exports = router;
