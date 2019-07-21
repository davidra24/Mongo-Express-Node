const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost:27017/electiva";
const db = mongoose.connect(mongoUrl, { useNewUrlParser: true }, err => {
  if (err) {
    console.log("Error de conexión");
  } else {
    console.log("Conectado");
  }
});

module.exports = db;
