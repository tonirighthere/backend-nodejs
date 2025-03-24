module.exports.index = (req, res) => { 
  res.render("admin/pages/products/index", {  //render file và truyền biến động vào
    pageTitle: "Trang sản phẩm"
  })
}