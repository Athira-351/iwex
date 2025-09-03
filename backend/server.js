const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const authRoutes = require("./routes/auth");
require("dotenv").config();

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use("/api/auth", authRoutes);

sequelize
  .sync({ alter: true })
  .then(() => console.log(" Database synced (alter)"))
  .catch((err) => console.error(" Error syncing DB:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
