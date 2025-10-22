// server.js
require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

// CORS (yksinkertainen versio)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// ROUTES
app.use("/athletes", require("./routes/athleteRoutes"));

// VIRHEENKÄSITTELY
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Server error" });
});

// KÄYNNISTYS
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
