const express = require("express");
const routes = require("./routes")
const api = express();
api.use(express.json());
const bodyParser = require("body-parser");
require('dotenv').config()
const port = process.env.PORT || 3000
api.use(express.json());
api.use(bodyParser.json());
api.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credential", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

api.use("/",routes)
api.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
