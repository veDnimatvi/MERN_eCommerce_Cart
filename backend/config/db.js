require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDb connection success");
  } catch (error) {
    console.log("MongoDb connection fail");
    process.exit(1);
  }
};

module.exports = connectDB;
