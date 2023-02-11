const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrphanagesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: "Please enter your email",
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Orphanages", OrphanagesSchema);
