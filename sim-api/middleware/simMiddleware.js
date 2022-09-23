const DataSIM = require("../models/sim");
async function getData(req, res, next) {
   let simData;
   try {
      simData = await DataSIM.findById(req.params.id);
      if (simData == null) {
         return res.status(404).json({ message: "Cannot find sim data" });
      }
   } catch (err) {
      return res.status(500).json({ message: err.message });
   }
   res.sim = simData;
   next();
}

module.exports = {
   getData,
};
