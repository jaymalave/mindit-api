const patient = require("../Model/patientModel");

exports.createpatient = async (req, res) => {
  try {
    const newpatient = await patient.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        patients: newpatient,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updatepatient = async (req, res) => {
  try {
    const newpatient = await patient.findByIdAndUpdate(
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

exports.deletepatient = async (req, res) => {
  try {
    const newpatient = await patient.findByIdAndDelete(req.params.id);

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
