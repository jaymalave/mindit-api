const mongoose = require("mongoose");
const validator = require("validator");

const patientSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },

  phoneNumber: {
    type: Number,
    required: [true, "A patient must have a phone number"],
  },

  name: {
    type: String,
    required: [true, "A patient must have a name"],
    unique: true,
    trim: true,
  },

  profilePicture: {
    type: String,
  },
  doctorId: {
    type: mongoose.Schema.ObjectId,
    ref: "Doctor",
  },
});

const Patient = mongoose.model("patient", patientSchema);

module.exports = Patient;
