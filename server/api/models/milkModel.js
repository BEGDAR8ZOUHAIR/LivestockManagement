const mongoose = require("mongoose");

const milkSchema = mongoose.Schema(
  {
    date: {
      type: String,
      required: [true, "Please enter date of milk"],
    },
    type: {
      type: String, 
      required: [true, "Please enter type of milk"],
    },
    AMTotal: {
      type: String,
      required: [true, "Please enter AMTotal of milk"],
    },
    PMTotal: {
      type: String,
      required: [true, "Please enter PMTotal of milk"],
    },
    Total: {
      type: String,
      required: [true, "Please enter Total of milk"],
    },
    totalUsed: {
      type: String,
      required: [true, "Please enter total Used of milk"],
    },
    note: {
      type: String,
      required: [true, "Please enter note of milk"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Milk", milkSchema);




   
