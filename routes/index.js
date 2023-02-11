var express = require("express");
var router = express.Router();
const Cashflows = require("../models/Cashflows");
const Restaurants = require("../models/Restaurants");
const Orphanages = require("../models/Orphanages");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/cashflows", function (req, res, next) {
  res.render("cashflows");
});
router.get("/restaurants", function (req, res, next) {
  res.render("restaurants");
});
router.get("/orphanages", function (req, res, next) {
  res.render("orphanages");
});
router.post("/save-restaurants", async function (req, res, next) {
  await Restaurants.insertMany({
    //console.log(req.body);
    name: req.body.name,
    email: req.body.email,
    // password: req.body.password,
  });
  res.redirect("/");
});
router.post("/save-orphanages", async function (req, res, next) {
  await Orphanages.insertMany({
    //console.log(req.body);
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    location: req.body.location,
  });
  res.redirect("/");
});
// router.post("/save-cashflows", async function (req, res, next) {
//   await Cashflows.insertMany({
//     //console.log(req.body);
//     date: req.body.date,
//     category: req.body.category,
//     amount: req.body.amount,
//   });
//   res.redirect("/history");
// });
// router.get("/history", async function (req, res, next) {
//   const cashflows = await Cashflows.find();
//   console.log(cashflows);
//   res.render("history", { cashflowList: cashflows });
// });
// router.get("/reports", async function (req, res, next) {
//   currentDate = new Date();
//   startDate = new Date(currentDate.getFullYear(), 0, 1);
//   var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

//   var weekNumber = Math.ceil(days / 7);
//   var monthNumber = new Date().getMonth() + 1;
//   console.log("Month number=", monthNumber);
//   const cashflows = await Cashflows.aggregate([
//     {
//       $group: { _id: { $week: "$date" }, weekly_total: { $sum: "$amount" } },
//     },
//     { $match: { _id: weekNumber } },
//   ]);
//   //console.log(cashflows);

// const cashflows2 = await Cashflows.aggregate([
//   {
//     $group: {
//       _id: { $month: "$date" },
//       monthly_total: { $sum: "$amount" },
//     },
//   },
//   { $match: { _id: monthNumber } },
// ]);
//   res.render("reports", { cashflowList: cashflows, cashflowList2: cashflows2 });
// });
module.exports = router;
