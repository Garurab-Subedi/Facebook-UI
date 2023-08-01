const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");


//const dotenv = require ("dotevn");
const app = express();

//dotenv.config();

mongoose
  .connect("mongodb://127.0.0.1/facebook" ,{useNewUrlParser: true})
  .then(() => console.log("Connection is sucessfull"))
  .catch((err) => console.error("Coundnot cconnect to mongodb", err));


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(8000, () => {
    console.log("Backend server is running....")
})
