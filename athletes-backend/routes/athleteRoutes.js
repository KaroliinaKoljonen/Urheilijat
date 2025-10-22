// routes/athleteRoutes.js
const express = require("express");
const router = express.Router();
const athleteController = require("../controllers/athleteController");

router
  .route("/")
  .get(athleteController.getAllAthletes)
  .post(athleteController.createAthlete);

router
  .route("/:id")
  .get(athleteController.getAthleteById)
  .put(athleteController.updateAthlete)
  .delete(athleteController.deleteAthlete);

module.exports = router;
