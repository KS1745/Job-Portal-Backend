//imports
import express from "express";
import dotenv from "dotenv";
import colors from "colors";

//Dot Env Config
dotenv.config();

//rest object
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to my Job Portal</h1>");
});

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} Mode on port no ${PORT}`
      .bgCyan.white
  );
});
