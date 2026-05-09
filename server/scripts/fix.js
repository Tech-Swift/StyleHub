import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dreadlocksId = new mongoose.Types.ObjectId("69ff0ae998d3952f224ce933");
const nailsId = new mongoose.Types.ObjectId("69ff0ae998d3952f224ce934");
const braidingId = new mongoose.Types.ObjectId("69ff0ae998d3952f224ce932");

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // DREADLOCKS
    await mongoose.connection.collection("services").updateMany(
      { title: { $regex: /loc/i } },
      { $set: { categoryId: dreadlocksId } }
    );

    // NAILS
    await mongoose.connection.collection("services").updateMany(
      { title: { $regex: /nail/i } },
      { $set: { categoryId: nailsId } }
    );

    // BRAIDING (hair)
    await mongoose.connection.collection("services").updateMany(
      { title: { $regex: /hair/i } },
      { $set: { categoryId: braidingId } }
    );

    console.log("✅ Category migration complete");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();