// Vanilla node js

// const fs = require("fs");

// const requestHandler = (req, res) => {
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
// };

// // sekarang harus di export agar connect ke app.js
// // ada 2 cara untuk export
// // module.exports = requestHandler;
// //
// // module export using object
// module.exports = {
//   handler: requestHandler,
//   someText: "JANCOK KABEH",
// };

// // dapat juga seperti ini
// // module.export.handler = requestHandler;
// // export.handler = requestHandler;
