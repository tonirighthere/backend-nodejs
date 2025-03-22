const express = require("express");
require("dotenv").config();

const route = require("./routes/client/index.route");

const app = express();
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

//Route 
route(app);
// app.get("/", (req, res) => {
//   res.render("client/pages/home/index");
// });

// app.get("/products", (req, res) => {
//   res.render("client/pages/products/index")
// });

app.listen(port, () => {
  console.log(`Đang nghe cổng ${port}!`);
})