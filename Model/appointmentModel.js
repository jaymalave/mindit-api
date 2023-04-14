const mongoose = require("mongoose");
const validator = require("validator");

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.ObjectId,
    ref: "Patients",
  },
  doctorId: {
    type: mongoose.Schema.ObjectId,
    ref: "Doctors",
  },
  date: {
    type: Date,
  },
});

const Appointment = mongoose.model("appointment", appointmentSchema);

module.exports = Appointment;
