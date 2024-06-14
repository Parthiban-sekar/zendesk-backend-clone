const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");



require("dotenv").config();

//require the .env data
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;
const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const FEURL = process.env.FEURL

app.use(express.json());
app.use(cors());

const studentRouter = require("./Routes/studentRoutes.js");
const loginRouter = require("./Routes/loginRoutes.js");
const capstoneRouter = require("./Routes/capstoneRoutes.js");
const leaveRouter = require("./Routes/leaveRoutes.js")
const portfolioRouter =require("./Routes/portfolioRoutes.js")
const queryRouter =require("./Routes/queryRoutes.js")
const taskRouter =require("./Routes/taskRoutes.js")
const webcodeRouter =require("./Routes/webcodeRoutes.js")

// db connect 
mongoose.set("strictQuery", true);
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

// checking the postman api
app.get("/", (req, res) => {
  res.send("Welcome to Zen-Dashboard");
});

app.use(studentRouter);
app.use(loginRouter);
app.use(capstoneRouter);
app.use(leaveRouter);
app.use(portfolioRouter);
app.use(queryRouter);
app.use(taskRouter);
app.use(webcodeRouter);

// listening port 
app.listen(PORT, () => {
  console.log("successfully running on the port", PORT);
})


module.exports = app;