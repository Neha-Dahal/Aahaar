const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: "Please enter your email",
    },
    // password: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Restaurants", RestaurantsSchema);
