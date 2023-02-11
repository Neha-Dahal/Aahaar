var express = require("express");
var router = express.Router();
const Restaurants = require("../models/Restaurants");
const Orphanages = require("../models/Orphanages");
const Donations = require("../models/Donations");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/newhome", function (req, res, next) {
  res.render("newhome");
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
router.get("/donations", function (req, res, next) {
  res.render("donations");
});
router.post("/save-restaurants", async function (req, res, next) {
  await Restaurants.insertMany({
    //console.log(req.body);
    name: req.body.name,
    email: req.body.email,
    // password: req.body.password,
  });
  res.redirect("/donations");
});
router.post("/save-orphanages", async function (req, res, next) {
  await Orphanages.insertMany({
    //console.log(req.body);
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    location: req.body.location,
  });
  res.redirect("/dashboard");
});
router.post("/save-donations", async function (req, res, next) {
  await Donations.insertMany({
    //console.log(req.body);
    name: req.body.name,
    food: req.body.food,
    foodamount: req.body.foodamount,
    contact: req.body.contact,
    location: req.body.location,
    timing: req.body.timing,
  });
  res.redirect("/newhome");
});
router.get("/dashboard", async function (req, res, next) {
  const donations = await Donations.find();
  console.log(donations);
  res.render("dashboard", { donationList: donations });
});

module.exports = router;
