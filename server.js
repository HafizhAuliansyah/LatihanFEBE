const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const app = express();
const router = require("./routes");

// Use middleware
app.use(bodyParser.urlencoded({ extended: false }));
const publicDirectoryPath = path.join(__dirname);
app.use(express.static(publicDirectoryPath));

hbs.registerHelper("inc", function (value, options) {
   return parseInt(value) + 1;
});
app.set("view engine", "vue");
app.engine("vue", hbs.__express);

const viewPath = path.join(__dirname, "src");
app.set("src", viewPath);

// Use routing
app.use(express.json());
app.use("/", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log("Server is up on port " + port);
});
