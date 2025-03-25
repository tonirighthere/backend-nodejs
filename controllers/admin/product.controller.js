const Product = require("../../models/product.model");

// phương thức: [GET]  với path: /admin/products
module.exports.index = async (req, res) => { 
  const products = await Product.find({
    deleted: false
  });
  //lấy data ở be
  console.log(products);
  res.render("admin/pages/products/index", {  //render file và truyền biến động vào
    pageTitle: "Trang sản phẩm", 
    products: products
  });
}