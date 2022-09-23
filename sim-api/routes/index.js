const express = require("express");
const router = express.Router();
const simRoutes = require("./sim");

router.use("/sim", simRoutes);
module.exports = router;
