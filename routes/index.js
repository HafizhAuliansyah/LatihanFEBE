const express = require("express");
const router = express.Router();
const simRoutes = require("./sim");

router.get("/", (req, res) => {
   res.redirect("/dashboard");
});
router.get("/dashboard", (req, res) => {
   res.render("app");
});
router.use("/list-sim", simRoutes);
module.exports = router;
