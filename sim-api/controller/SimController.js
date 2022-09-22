const DataSIM = require("../models/sim");

async function sendAllData(req, res) {
   try {
      let datas = await DataSIM.find({});
      res.status(200).send(datas);
   } catch (err) {
      res.status(500).send(err.message);
   }
}
async function sendData(req, res, phone) {
   try {
      let datas = await DataSIM.find({ phone: phone });
      res.status(200).send(datas);
   } catch (err) {
      res.status(500).send(err.message);
   }
}
async function addData(req, res) {
   try {
      let newData = new DataSIM({
         nik: req.body.nik,
         phone: req.body.phone,
         providers: req.body.providers,
         registration_date: Date.now,
      });
      newData.save();
      res.status(200).send(newData);
   } catch (err) {
      res.status(500).send(err.message);
   }
}
async function updateData(req, res, phone) {
   try {
      let newData = new DataSIM({
         nik: req.body.nik,
         phone: req.body.phone,
         providers: req.body.providers,
         registration_date: Date.now,
      });
      let datas = await DataSIM.findOneAndUpdate({ phone: phone }, { $set: newData }, { new: true });
      res.status(200).send(datas);
   } catch (err) {
      res.status(500).send(err.message);
   }
}
module.exports = {
   sendAllData,
   sendData,
   addData,
   updateData,
};
