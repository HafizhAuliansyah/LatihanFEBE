const DataSIM = require("../models/sim");

async function sendAllData(req, res) {
   try {
      let datas = await DataSIM.find({});
      res.status(200).send(datas);
   } catch (err) {
      res.status(500).json({ message: err.message, status: "Error" });
   }
}
async function sendData(req, res, phone) {
   try {
      let datas = await DataSIM.find({ phone: phone });
      if (datas == null) {
         res.status(404).json({ message: "Cannot find data" });
      } else {
         res.status(200).send(datas);
      }
   } catch (err) {
      res.status(500).json({ message: err.message, status: "Error" });
   }
}
async function addData(req, res) {
   try {
      let newData = new DataSIM({
         nik: req.body.nik,
         phone: req.body.phone,
         providers: req.body.providers,
      });
      console.log(req.body.nik);
      const newSIM = await newData.save();
      res.status(200).json(newSIM);
   } catch (err) {
      res.status(500).json({ message: err.message, status: "Error" });
   }
}
async function updateData(req, res) {
   try {
      if (req.body.nik != null) {
         res.sim.nik = req.body.nik;
      }
      if (req.body.phone != null) {
         res.sim.phone = req.body.phone;
      }
      if (req.body.providers != null) {
         res.sim.providers = req.body.providers;
      }
      const updatedData = await res.sim.save();
      res.status(200).send(updatedData);
   } catch (err) {
      res.status(400).json({ message: err.message, status: "Error" });
   }
}
async function deleteData(req, res) {
   try {
      await res.sim.remove();
      res.status(200).json({ message: "Success Delete", status: "Success" });
   } catch (err) {
      res.status(500).json({ message: err.message, status: "Error" });
   }
}
module.exports = {
   sendAllData,
   sendData,
   addData,
   updateData,
   deleteData,
};
