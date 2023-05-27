const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const sequelize = require("./config/dbconfig");
const User = require("./model/User");
const userRoutes = require("./routes/userRoutes");
var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

const connectDB = async () => {
  try {
    await sequelize.authenticate();

    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectDB();

app.get("/", (req, res) => {
  return res.json({ message: "Hii from the server" });
});

app.use("/api/user", userRoutes);

//error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

app.listen(PORT, () => {
  console.log("app is listening at port" + PORT);
});
