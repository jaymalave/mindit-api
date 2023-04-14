const Appointment = require("../Model/appointmentModel");

exports.createAppointment = async (req, res) => {
  try {
    const newAppointment = await Appointment.create(req.body);

    res.status(200).json({
      message: "success",
      status: 200,
      data: {
        appointments: newAppointment,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const newAppointment = await Appointment.findByIdAndUpdate(
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
        appointments,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const newAppointment = await Appointment.findByIdAndDelete(req.params.id);

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
