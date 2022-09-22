const express = require("express");
const router = express.Router();
const SimController = require("../controller/SimController");

router.get("/", async (req, res) => {
   SimController.sendAllData(req, res);
});
router.get("/:phone", async (req, res) => {
   SimController.sendData(req, res, req.params.phone);
});
router.post("/", async (req, res) => {
   SimController.addData(req, res);
});
router.put("/", async (req, res) => {
   SimController.updateData(req, res);
});
module.exports = router;
