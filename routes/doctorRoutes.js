const express = require("express");
const doctorController = require("./../controllers/doctorController");

const router = express.Router();

router.route("/").post(doctorController.createDoctor);

router
  .route("/:id")
  .patch(doctorController.updateDoctor)
  .delete(doctorController.deleteDoctor);

module.exports = router;
