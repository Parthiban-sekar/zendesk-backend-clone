const loginRouter = require("express").Router();
const { login } = require("../controllers/login.js");

loginRouter.post("/student/login", login);

module.exports = loginRouter;