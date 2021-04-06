const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
// dijadikan static untuk dapat menggunkan file css ini fungsi dari express
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404")
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);

// using express before routes
// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/add-product", (req, res, next) => {
//   res.send(
//     "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
//   );
// });
// app.post("/product", (req, res, next) => {
//   // dapat menggunakan use, get dan post dll
//   console.log(req.body);
//   res.redirect("/");
// });
// app.use("/", (req, res, next) => {
//   res.send("<h1>Hello form express</h1>");
// });

// app.listen(3000);

// kegunnan next
// app.use((req, res, next) => {
//   console.log("In the middleware");
//   next(); // next berguna untuk melanjutkan ke middleware selanjutnya
// });

// const routes = require("./routes"); // vanilla node js
// const http = require("http"); // before using express

// before using express
// const server = http.createServer(app);
// server.listen(3000);

// Softcopy pelajaran nodejs
// const http = require("http");
// const fs = require("fs");
// anonymous function
// http.createServer(function(req, res) {});

// function declaration
// function rqListener(req, res) {}
// http.createServer(rqListener);

// arrow function
// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title>Entered Message</title></head>");
//     res.write(
//       '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
//     );
//     res.write("<html>");
//     return res.end();
//     // kalo tidak di return akan error dia akan mengseksusi baris selanjutnya.
//   }
//   if (url === "/message" && method === "POST") {
//     let body = [];
//     req.on("data", (chunk) => {
//       console.log(chunk);
//       body.push(chunk);
//     });
//     return req.on("end", () => {
//       const parsedBody = Buffer.concat(body).toString();
//       const message = parsedBody.split("=")[1];
//       // fs.writeFileSync("message.txt", message); // ini memberikan file txt berupa synchronous
//       fs.writeFile("message.txt", message, (err) => {
//         res.statusCode = 302;
//         res.setHeader("Location", "/");
//         return res.end();
//       });
//     });
//   }
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My First Page</title></head>");
//   res.write("<body><h1>Hello Nodejs</h1></body>");
//   res.write("<html>");
//   res.end();
//   //   process.exit();
//   //jika menambahkan method write after method end maka akan ERROR
// });

// server.listen(3000);
