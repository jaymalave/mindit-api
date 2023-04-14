const express = require("express");
const prescriptionController = require("./../controllers/prescriptionController");

const router = express.Router();

router.route("/").post(prescriptionController.createPrescription);

router
  .route("/:id")
  .patch(prescriptionController.updatePrescription)
  .delete(prescriptionController.deletePrescription);

module.exports = router;
