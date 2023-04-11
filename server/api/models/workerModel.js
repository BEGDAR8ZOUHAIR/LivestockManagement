const mongoose = require("mongoose");

const workerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name of worker"],
    },
    phone: {
      type: String,
      required: [true, "Please enter phone of worker"],
    },
    address: {
      type: String,
      required: [true, "Please enter address of worker"],
    },
    note: {
      type: String,
      required: [true, "Please enter note of worker"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Worker", workerSchema);
   



   
