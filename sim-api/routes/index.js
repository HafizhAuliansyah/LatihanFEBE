const express = require("express");
const router = express.Router();
const simRoutes = require("./sim");

router.get("/", (req, res) => {
   res.redirect("/sim");
});
router.use("/sim", simRoutes);
module.exports = router;
