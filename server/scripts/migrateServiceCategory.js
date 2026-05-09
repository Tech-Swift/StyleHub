import mongoose from "mongoose";
import Service from "../models/Service.js";
import Category from "../models/Category.js";
import dotenv from "dotenv";

dotenv.config();

const migrate = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // 1. Load categories once
    const categories = await Category.find();

    const map = {};
    for (const c of categories) {
      map[c.name.toLowerCase().trim()] = c._id;
    }

    // 2. Load services once
    const services = await Service.find();

    // 3. Loop services once
    for (const service of services) {
      if (!service.category) continue;

      const key = service.category.toLowerCase().trim();
      const categoryId = map[key];

      if (!categoryId) {
        console.log("No match:", service.category);
        continue;
      }

      await Service.updateOne(
        { _id: service._id },
        {
          $set: { categoryId },
          $unset: { category: "" }
        }
      );

      console.log(`Updated: ${service.title}`);
    }

    console.log("Migration complete");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

migrate();