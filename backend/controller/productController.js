const Product = require("../models/Product");

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Err",
    });
  }
};

const getAllProductById = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);

    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Err",
    });
  }
};

module.exports = {
  getAllProduct,
  getAllProductById,
};
