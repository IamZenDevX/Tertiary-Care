const express = require("express");
const dotenv = require("dotenv");

const colors = require("colors");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");


const indexfile = require("./router/index.js");

// DOTENV CONFIGURATION
dotenv.config();




const app = express();


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", indexfile);


const dbURI = `mongodb+srv://name:password@cluster0.0tq4xsw.mongodb.net/teriterycare?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(1598);
    console.log("MongoDB connected...!!!!!!!!!! You are working on 1598");
  })
  .catch((err) => console.log(err));
