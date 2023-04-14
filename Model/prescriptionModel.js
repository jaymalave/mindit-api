const mongoose = require("mongoose");
const validator = require("validator");

const prescriptionSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.ObjectId,
    ref: "Patient",
  },
  doctorId: {
    type: mongoose.Schema.ObjectId,
    ref: "Doctor",
  },
  name: {
    type: String,
    unique: true,
    trim: true,
  },
  activity: {
    type: String,
    unique: true,
    trim: true,
  },
});

const Prescription = mongoose.model("prescription", prescriptionSchema);

module.exports = Prescription;
