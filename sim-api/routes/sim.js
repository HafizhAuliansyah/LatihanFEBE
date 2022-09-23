const express = require("express");
const router = express.Router();
const SimController = require("../controller/SimController");
const SimMiddleware = require("../middleware/simMiddleware");

router.get("/", async (req, res) => {
   SimController.sendAllData(req, res);
});
router.get("/:phone", async (req, res) => {
   SimController.sendData(req, res, req.params.phone);
});
router.post("/", async (req, res) => {
   SimController.addData(req, res);
});
router.patch("/:id", SimMiddleware.getData, async (req, res) => {
   SimController.updateData(req, res);
});
router.delete("/:id", SimMiddleware.getData, async (req, res) => {
   SimController.deleteData(req, res);
});
module.exports = router;
