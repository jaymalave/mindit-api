const Patient = require("../Model/patientModel");

exports.createPatient = async (req, res) => {
  try {
    const newPatient = await Patient.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        patients: newPatient,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const newPatient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        patients,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const newPatient = await Patient.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
