const mongoDb = require("mongodb");
const Product = require("../models/product");

const ObjectId = mongoDb.ObjectID;

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, price,description );
  product
    .save()
    .then((result) => {
      console.log("create product");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      throw error;
    });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const product = new Product(
    updatedTitle,
    updatedPrice,
    updatedDesc,
    updatedImageUrl,
    new ObjectId(prodId)
  );
  product
    .save()
    .then((result) => {
      console.log("Update Product");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

// exports.postDeleteProducts = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.findByPk(prodId)
//     .then((product) => {
//       return product.destroy();
//     })
//     .then((result) => {
//       console.log("Delete Product");
//       res.redirect("/admin/products");
//     })
//     .catch((err) => console.log(err));
// };

//

// connect database mysql using sequelize package

// exports.getAddProduct = (req, res, next) => {
//   res.render("admin/edit-product", {
//     pageTitle: "Add Product",
//     path: "/admin/add-product",
//     editing: false,
//   });
// };

// exports.postAddProduct = (req, res, next) => {
//   const title = req.body.title;
//   const imageUrl = req.body.imageUrl;
//   const price = req.body.price;
//   const description = req.body.description;
//   // Magic association method
//   req.user
//     .createProduct({
//       title: title,
//       price: price,
//       imageUrl: imageUrl,
//       description: description,
//     })
//     // before using association method
//     // Product.create({
//     // title: title,
//     // price: price,
//     // imageUrl: imageUrl,
//     // description: description,
//     // userId: req.user.id,
//     // })
//     .then((result) => {
//       console.log("create product");
//       res.redirect("/admin/products");
//     })
//     .catch((err) => console.log(err));
//   // Before using sequelize
//   // const product = new Product(null, title, imageUrl, description, price);
//   // product
//   //   .save()
//   //   .then(() => {
//   //     res.redirect("/");
//   //   })
//   //   .catch((err) => console.log(err));
// };

// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect("/");
//   }
//   const prodId = req.params.productId;
//   req.user
//     .getProducts({
//       where: { id: prodId },
//     })
//     // Product.findByPk(prodId)
//     .then((products) => {
//       const product = products[0];
//       if (!product) {
//         return res.redirect("/");
//       }
//       res.render("admin/edit-product", {
//         pageTitle: "Edit Product",
//         path: "/admin/edit-product",
//         editing: editMode,
//         product: product,
//       });
//     })
//     .catch((err) => console.log(err));
//   // Before Using sequelize
//   // Product.findById(prodId, (product) => {
//   //   if (!product) {
//   //     return res.redirect("/");
//   //   }
//   // res.render("admin/edit-product", {
//   //   pageTitle: "Edit Product",
//   //   path: "/admin/edit-product",
//   //   editing: editMode,
//   //   product: product,
//   // });
//   // });
// };

// exports.postEditProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   const updatedTitle = req.body.title;
//   const updatedPrice = req.body.price;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedDesc = req.body.description;
//   Product.findByPk(prodId)
//     .then((product) => {
//       product.title = updatedTitle;
//       product.price = updatedPrice;
//       product.imageUrl = updatedImageUrl;
//       product.description = updatedDesc;
//       return product.save();
//     })
//     .then((result) => {
//       console.log("Update Product");
//       res.redirect("/admin/products");
//     })
//     .catch((err) => console.log(err));

//   // Before using sequelize and then to save to database
//   // const updatedProduct = new Product(
//   //   prodId,
//   //   updatedTitle,
//   //   updatedImageUrl,
//   //   updatedDesc,
//   //   updatedPrice
//   // );
//   // updatedProduct.save();
//   // res.redirect("/admin/products");
// };

// exports.getProducts = (req, res, next) => {
//   req.user
//     .getProducts()
//     // Product.findAll()
//     .then((products) => {
//       res.render("admin/products", {
//         prods: products,
//         pageTitle: "Admin Products",
//         path: "/admin/products",
//       });
//     })
//     .catch((err) => console.log(err));
//   // Before using sequelize
//   // Product.fetchAll((products) => {
//   //   res.render("admin/products", {
//   //     prods: products,
//   //     pageTitle: "Admin Products",
//   //     path: "/admin/products",
//   //   });
//   // });
// };

// exports.postDeleteProducts = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.findByPk(prodId)
//     .then((product) => {
//       return product.destroy();
//     })
//     .then((result) => {
//       console.log("Delete Product");
//       res.redirect("/admin/products");
//     })
//     .catch((err) => console.log(err));

//   // Before using sequelize
//   // Product.deleteById(prodId);
//   // res.redirect("/admin/products");
// };

// Before using database
// const Product = require("../models/product");

// exports.getAddProduct = (req, res, next) => {
//   res.render("admin/edit-product", {
//     pageTitle: "Add Product",
//     path: "/admin/add-product",
//     editing: false,
//   });
// };

// exports.postAddProduct = (req, res, next) => {
//   const title = req.body.title;
//   const imageUrl = req.body.imageUrl;
//   const price = req.body.price;
//   const description = req.body.description;
//   const product = new Product(null, title, imageUrl, description, price);
//   product.save();
//   res.redirect("/");
// };

// exports.getEditProduct = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect("/");
//   }
//   const prodId = req.params.productId;
//   Product.findById(prodId, (product) => {
//     if (!product) {
//       return res.redirect("/");
//     }
//     res.render("admin/edit-product", {
//       pageTitle: "Edit Product",
//       path: "/admin/edit-product",
//       editing: editMode,
//       product: product,
//     });
//   });
// };

// exports.postEditProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   const updatedTitle = req.body.title;
//   const updatedPrice = req.body.price;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedDesc = req.body.description;
//   const updatedProduct = new Product(
//     prodId,
//     updatedTitle,
//     updatedImageUrl,
//     updatedDesc,
//     updatedPrice
//   );
//   updatedProduct.save();
//   res.redirect("/admin/products");
// };

// exports.getProducts = (req, res, next) => {
//   Product.fetchAll((products) => {
//     res.render("admin/products", {
//       prods: products,
//       pageTitle: "Admin Products",
//       path: "/admin/products",
//     });
//   });
// };

// exports.postDeleteProducts = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.deleteById(prodId);
//   res.redirect("/admin/products");
// };
