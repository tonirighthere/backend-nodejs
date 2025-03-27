const mongoose = require("mongoose");

// Định nghĩa cấu trúc của dữ liệu products trong MongoDB.
const productSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    thumbnail: String,
    status: String,
    position: Number,
    deleted: Boolean
  }
);

const Product = mongoose.model('Product', productSchema, "products");
    //  ==                        ==                 bảng trong compass muốn connect

module.exports = Product