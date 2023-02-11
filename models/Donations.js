const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonationsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    food: {
      type: String,
      required: true,
    },
    foodamount: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    timing: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Donations", DonationsSchema);
