const express = require("express");
const router = express.Router();
const DataSIM = require("../models/sim");

router.get("/", async (req, res) => {
   try {
      let datas = await DataSIM.find({});
      res.status(200).send(datas);
   } catch (err) {
      console.log(err.message);
   }
});

module.exports = router;
