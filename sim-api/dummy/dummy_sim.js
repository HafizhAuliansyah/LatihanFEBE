const SIM = require("../models/sim");

async function generateDummy() {
   const datas = [
      {
         nik: 3374110504500001,
         phone: 6281211303932,
         providers: "TELKOMSEL",
         registration_date: "2020-01-18 00:00:00.0",
      },
      {
         nik: 1671041012990026,
         phone: 6281218396251,
         providers: "TELKOMSEL",
         registration_date: "2020-01-18 00:00:00.0",
      },
      {
         nik: 5320046812700001,
         phone: 6281218746738,
         providers: "TELKOMSEL",
         registration_date: "2020-01-17 00:00:00.0",
      },
      {
         nik: 3403157112660039,
         phone: 6281225306477,
         providers: "TELKOMSEL",
         registration_date: "2020-01-18 00:00:00.0",
      },
      {
         nik: 3307151606690004,
         phone: 6281228043099,
         providers: "TELKOMSEL",
         registration_date: "2020-01-19 00:00:00.0",
      },
      {
         nik: 3302031608800001,
         phone: 6281228173687,
         providers: "TELKOMSEL",
         registration_date: "2020-01-18 00:00:00.0",
      },
      {
         nik: 3312105706810001,
         phone: 6281228189121,
         providers: "TELKOMSEL",
         registration_date: "2020-01-17 00:00:00.0",
      },
   ];

   SIM.insertMany(datas)
      .then((value) => {
         console.log("Success dummy data sim");
      })
      .catch((error) => {
         console.log(error);
      });
}

// Hapus lalu generate data
SIM.deleteMany({})
   .then((value) => {
      console.log("Success delete all data");
      generateDummy();
   })
   .catch((err) => {
      console.log(err);
   });
