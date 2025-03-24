const express = require("express");
require("dotenv").config();

const database = require("./config/database");

const route = require("./routes/client/index.route");

database.connect();

const app = express();
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public")); //giúp chèn các file trong public ở trong public luôn, ko phải dẫn

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