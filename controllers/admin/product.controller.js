const Product = require("../../models/product.model");

const filterStatusHelper = require("../../helpers/filterStatus");
const searchHelper = require("../../helpers/search");
const paginationHelper = require("../../helpers/pagination");


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

  // Pagination 
  const countProducts = await Product.countDocuments(find);

  let objectPagination = paginationHelper(
    {
    currentPage: 1,
    limitItems: 4
    },
    req.query,
    countProducts
    );
  // End Pagination 


  const products = await Product.find(find).limit(objectPagination.limitItems).skip(objectPagination.skip);
  //lấy data ở be
 
  res.render("admin/pages/products/index", {  //render file và truyền biến động vào
    pageTitle: "Trang sản phẩm", 
    products: products,
    filterStatus: filterStatus, 
    keyword: objectSearch.keyword,
    pagination: objectPagination
  });
}