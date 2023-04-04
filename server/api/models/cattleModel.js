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
    age: {
      type: String,
      required: [true, "Please enter age of cattle"],
    },
    gender: {
      type: String,
      required: [true, "Please enter gender of cattle"],
    },
    weight: {
      type: String,
      required: [true, "Please enter weight of cattle"],
    },
    birthDate: {
      type: String,
      required: [true, "Please enter birth date of cattle"],
    },
    dateOfEntry: {
      type: String,
      required: [true, "Please enter date of entry of cattle"],
    },
    obtainedFrom: {
      type: String,
      required: [true, "Please enter obtained from of cattle"],
    },
    obtainedBy: {
      type: String,
      required: [true, "Please enter obtained by of cattle"],
    },
    status: {
      type: String,
      required: [true, "Please enter status of cattle"],
    },
    mother: {
      type: String,
      required: [true, "Please enter mother of cattle"],
    },
    father: {
      type: String,
      required: [true, "Please enter father of cattle"],
    },
    note: {
      type: String,
      required: [true, "Please enter note of cattle"],
    },
    image: {
      type: String,
      required: [false, "Please enter image of cattle"],
    },
    
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Cattle", catlleSchema);
