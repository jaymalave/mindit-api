const Doctor = require("../Model/doctorModel");

exports.createDoctor = async (req, res) => {
  try {
    const newDoctor = await Doctor.create(req.body);

    res.status(200).json({
      message: "success",
      status: 200,
      data: {
        doctors: newDoctor,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateDoctor = async (req, res) => {
  try {
    const newDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        doctors,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const newDoctor = await Doctor.findByIdAndDelete(req.params.id);

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
