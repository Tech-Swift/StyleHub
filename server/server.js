const express = require('express');
const cors  = require('cors');
const connectDB = require("./config/db");
require("dotenv").config();


//Register routes
const testRoutes = require("./routes/testRoutes")
const app = express();

app.use(cors());

connectDB();

app.use(express.json());

app.use("/api/test", testRoutes);

app.get("/", (req, res) => {
    res.send("API is running");
});

app.get("/api/test", (req, res) => {
  res.json({ ok: true, message: "Backend connected" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server runnning on port ${PORT}`);
});