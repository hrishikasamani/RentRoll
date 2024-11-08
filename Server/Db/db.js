const mongoose = require("mongoose");

function connectDb() {
  mongoose.connect("mongodb+srv://hrishika:hrishika@cluster0.ude62.mongodb.net/rentroll?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const connection = mongoose.connection;
  connection.on("connected", () => {
    console.log("connection successfull");
  });
  connection.on("error", () => {
    console.log("connection failed");
  });
}

connectDb();
module.exports = mongoose;
