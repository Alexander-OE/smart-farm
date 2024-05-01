const mongoose = require("mongoose");

function connectToDB(URI) {
  mongoose
    .connect(URI)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(`DB Error: ${err}`));
}

module.exports = connectToDB