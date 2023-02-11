const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrphanagesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    food: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);
module.exports = mongoose.model("Orphanages", OrphanagesSchema);
