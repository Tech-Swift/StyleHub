import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import connectDB from "./config/db.js";

// Routes
import testRoutes from "./routes/testRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB connection
connectDB();

// Static files
app.use("/uploads", express.static(path.resolve("uploads")));

// Routes
app.use("/api/test", testRoutes);
app.use("/api/services", serviceRoutes);

// Health checks
app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/test", (req, res) => {
  res.json({ ok: true, message: "Backend connected" });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});