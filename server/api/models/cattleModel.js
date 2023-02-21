const mongoose = require("mongoose");

const catlleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name of cattle"],
    },
    
    type: {
      type: String,
      required: [true, "Please enter type of cattle "],
    },
    gender: {
      type: String,
      required: [true, "Please enter gender of cattle "],
    },
    weight: {
      type: String,
      required: [true, "Please enter weight of cattle "],
    },
    weight: {
      type: String,
      required: [true, "Please enter weight of cattle "],
    },
    weight: {
      type: String,
      required: [true, "Please enter weight of cattle "],
    },
    weight: {
      type: String,
      required: [true, "Please enter weight of cattle "],
    },
    weight: {
      type: String,
      required: [true, "Please enter weight of cattle "],
    },
   
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Cattle", catlleSchema);
