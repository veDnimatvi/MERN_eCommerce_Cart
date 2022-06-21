require("dotenv").config();

const productData = require("./data/products.js");

const connectDB = require("./config/db.js");

const Product = require("./models/Product.js");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    console.log("Data import success");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
