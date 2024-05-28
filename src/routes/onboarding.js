const express = require("express");

const router = express.Router();

const controller = require("../controllers/onboarding")

router.post("/register", controller.Register)

router.post("/login", controller.Login)

router.post("/farm-detail", controller.FarmDetail)

router.post("/appointment", controller.ScheduleAppointment)

router.get("/weather-data", controller.weatherData)

router.get("/farms/:id", controller.getFarmDetails)
module.exports = router;
