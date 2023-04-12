const mongoose = require("mongoose");
const validator = require("validator");

const doctorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },

  phoneNumber: {
    type: Number,
    required: [true, "A doctor must have a phone number"],
  },

  designation: {
    type: String,
    required: [true, "A doctor must have a desgnation"],
  },

  name: {
    type: String,
    required: [true, "A doctor must have a name"],
    unique: true,
    trim: true,
  },

  profilePictue: {
    type: String,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
