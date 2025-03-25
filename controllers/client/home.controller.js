// phương thức: [GET]  với path: /


module.exports.index = (req, res) => {  //.index: tên hàm
  res.render("client/pages/home/index", {  //render file và truyền biến động vào
    pageTitle: "Trang chủ"
  })
};