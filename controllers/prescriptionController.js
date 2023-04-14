const Prescription = require("../Model/prescriptionModel");

exports.createPrescription = async (req, res) => {
  try {
    const newPrescription = await Prescription.create(req.body);

    res.status(200).json({
      message: "success",
      status: 200,
      data: {
        prescriptions: newPrescription,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updatePrescription = async (req, res) => {
  try {
    const newPrescription = await Prescription.findByIdAndUpdate(
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
        prescriptions,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deletePrescription = async (req, res) => {
  try {
    const newPrescription = await Prescription.findByIdAndDelete(req.params.id);

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
