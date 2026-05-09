import mongoose from "mongoose";
import Category from "../models/Category.js";
import dotenv from "dotenv";

dotenv.config();

const categories = [
  "Hair",
  "Braiding",
  "Dreadlocks",
  "Nails",
  "Makeup",
  "Facial",
  "Barber",
  "Spa",
  "Other",
];

const seedCategories = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to MongoDB");

    // Prevent duplicates (IMPORTANT)
    const existing = await Category.find();
    if (existing.length > 0) {
      console.log("Categories already exist — skipping seed.");
      process.exit();
    }

    const formatted = categories.map((name) => ({
      name,
      slug: name.toLowerCase(),
    }));

    await Category.insertMany(formatted);

    console.log("Categories seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedCategories();