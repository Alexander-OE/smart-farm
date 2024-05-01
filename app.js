const express = require("express");
const connectDB = require("./src/connect");
require("dotenv").config();
const cors = require("cors")
const app = express();
const PORT = 4000;

app.use(cors())
app.use(express.json())
const authRoute = require("./src/routes/onboarding")

app.use("/api", authRoute)

async function startUp() {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
  } catch (error) {
    console.log("Server Error:" + error);
  }
}

startUp();
