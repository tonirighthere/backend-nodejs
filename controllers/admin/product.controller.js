const Product = require("../../models/product.model");

const filterStatusHelper = require("../../helpers/filterStatus");
const searchHelper = require("../../helpers/search");

// phương thức: [GET]  với path: /admin/products
module.exports.index = async (req, res) => { 
  const filterStatus = filterStatusHelper(req.query);

  let find = {
    deleted: false,
  };
  // nối thêm vào đối tượng find
  if(req.query.status){
    find.status = req.query.status;
  }

  const objectSearch = searchHelper(req.query);

  if(objectSearch.regex){
    find.title = objectSearch.regex
  }

  const products = await Product.find(find);
  //lấy data ở be
 
  res.render("admin/pages/products/index", {  //render file và truyền biến động vào
    pageTitle: "Trang sản phẩm", 
    products: products,
    filterStatus: filterStatus, 
    keyword: objectSearch.keyword
  });
}