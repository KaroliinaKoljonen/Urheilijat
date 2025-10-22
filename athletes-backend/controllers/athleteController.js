// controllers/athleteController.js
const Athlete = require("../models/Athlete");

exports.getAllAthletes = async (req, res, next) => {
  try {
    const [rows] = await Athlete.findAll();
    res.status(200).json({ count: rows.length, athletes: rows });
  } catch (err) {
    next(err);
  }
};

exports.getAthleteById = async (req, res, next) => {
  try {
    const [rows] = await Athlete.findById(req.params.id);
    if (rows.length === 0)
      return res.status(404).json({ message: "Athlete not found" });
    res.status(200).json(rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.createAthlete = async (req, res, next) => {
  try {
    const athlete = new Athlete(req.body);
    await athlete.save();
    res.status(201).json({ message: "Athlete added successfully" });
  } catch (err) {
    next(err);
  }
};

exports.updateAthlete = async (req, res, next) => {
  try {
    await Athlete.updateById(req.params.id, req.body);
    res.status(200).json({ message: "Athlete updated successfully" });
  } catch (err) {
    next(err);
  }
};

exports.deleteAthlete = async (req, res, next) => {
  try {
    await Athlete.deleteById(req.params.id);
    res.status(200).json({ message: "Athlete deleted successfully" });
  } catch (err) {
    next(err);
  }
};
