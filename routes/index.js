const express = require("express");
const router = express.Router();
const simRoutes = require("./sim");

router.get("/", (req, res) => {
   res.redirect("/list-sim");
});
router.use("/list-sim", simRoutes);
module.exports = router;
