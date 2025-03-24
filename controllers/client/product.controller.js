const Product = require("../../models/product.model");

// Lấy DATA không rõ khi nào mới xong => dùng async để chờ
module.exports.index = async (req, res) => {
  // const products = await Product.find({});  tim object
  const products = await Product.find({
    status: "active", 
    deleted: "false" 
  });

  const newProducts = products.map(item => {
    item.priceNew = Math.ceil(item.price - item.price * item.discountPercentage * 0.01)
    return item;
  });
  console.log(products);

  res.render("client/pages/products/index", {
    pageTitle: "Trang danh sách sản phẩm",
    products: newProducts
  })
}