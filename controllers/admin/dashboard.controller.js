module.exports.dashboard = (req, res) => { 
  res.render("admin/pages/dashboard/index", {  //render file và truyền biến động vào
    pageTitle: "Trang tổng quan"
  })
};