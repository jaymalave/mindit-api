const express = require("express");
const patientController = require("./../controllers/patientController");

const router = express.Router();

router.route("/").post(patientController.createpatient);

router
  .route("/:id")
  .patch(patientController.updatepatient)
  .delete(patientController.deletepatient);

module.exports = router;
