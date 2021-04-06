const path = require("path");
const rootDir = require("../util/path");
const adminData = require("./admin");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  // expressjs menyediakan render() sebagai templating engine
  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: "Shop" });
});

// connect to html before using pug templating
// router.get("/", (req, res, next) => {
//   console.log(adminData.products);
//   res.sendFile(path.join(rootDir, "views", "shop.html"));
// });
module.exports = router;
