// sebagai pintasan untuk menjadi directory name
const path = require("path");

module.exports = path.dirname(process.mainModule.filename);
