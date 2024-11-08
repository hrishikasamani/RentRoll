import express from 'express';
const express = require("express");
const path = require("path");
const app = express();
const dbConnection = require("./Db/db");

var cors = require("cors");
app.use(cors());

app.use(express.json());

const port = process.env.PORT || 4000;

app.get("/hello", (req, res) => {
  res.send("Hello!");
});

app.use("/api/cars/", require("./Routes/carsRoutes"));
//refresh error
app.use("/booking/api/cars/", require("./Routes/carsRoutes"));
app.use("/editcar/api/cars/", require("./Routes/carsRoutes"));
app.use("/api/users/", require("./Routes/usersRoutes"));
app.use("/booking/api/bookings/", require("./Routes/bookingsRoute"));
app.use("/api/bookings/", require("./Routes/bookingsRoute"));
app.listen(port, () => {
  console.log(`Server is running at port: ${port} `);
});

