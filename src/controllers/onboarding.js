const User = require("../model/user");
const Farm = require("../model/farmDetail");
const Appointment = require("../model/appointment");
const axios = require("axios");

const Register = async (req, res) => {
  const createUser = await User.create({ ...req.body });
  res.status(201).json({ message: "success", data: createUser });
};

const Login = async (req, res) => {
  const userExist = await User.findOne({ email: req.body.email })
  res.status(200).json({ message: "success", data: userExist });
};

const FarmDetail = async (req, res) => {
  const createFarm = await Farm.create({ ...req.body });
  res.status(200).json({ message: "sucess", data: createFarm });
};

const ScheduleAppointment = async (req, res) => {
  const createAppointment = await Appointment.create({ ...req.body });
  res.status(200).json({ messaeg: "success", data: createAppointment });
};

const weatherData = async (req, res) => {
  const { lat, lon } = req.query;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}`
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
};

module.exports = {
  Register,
  Login,
  FarmDetail,
  ScheduleAppointment,
  weatherData,
};
