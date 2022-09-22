const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/data_sim", {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const DataSIM = new Schema({
   nik: {
      type: Number,
      required: true,
      min: 1000000000000000,
      max: 9999999999999999,
      unique: true,
   },
   phone: {
      type: Number,
      required: true,
      min: 10000000000,
      max: 99999999999999,
   },
   providers: {
      type: String,
      required: true,
   },
   registration_date: {
      type: Date,
      required: true,
      default: Date.now,
   },
});

module.exports = mongoose.model("sim", DataSIM, "sim");
