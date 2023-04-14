const express = require("express");
const patientController = require("./../controllers/patientController");

const router = express.Router();

router.route("/").post(patientController.createPatient);

router
  .route("/:id")
  .patch(patientController.updatePatient)
  .delete(patientController.deletePatient);

module.exports = router;
