const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantsSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    name:{
      type:String,
      required:true,
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
    timing:{
      type: String, 
      required:true,
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Restaurants", RestaurantsSchema);
