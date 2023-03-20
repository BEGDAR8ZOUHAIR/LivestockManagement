const mongoose = require("mongoose");

const farmSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name of farm"],
    },
    category: {
      type: String,
      required: [true, "Please enter category of farm"],
    },
    cattlebreed: {
      type: String,
      required: [true, "Please enter cattle breed of farm"],
    },
    cattlegroup: {
      type: String,
      required: [true, "Please enter cattle group of farm"],
    },
    note: {
      type: String,
      required: [true, "Please enter note of farm"],
    },
    image: {
      type: String,
      required: [false, "Please enter image of farm"],
    },

 
    
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Farm", farmSchema);
