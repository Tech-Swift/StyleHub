import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Service title is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    description: {
      type: String,
      required: [true, "Service description is required"],
      trim: true,
      maxlength: 500,
    },

    price: {
      type: Number,
      required: [true, "Service price is required"],
      min: 0,
    },

    image: {
      type: String,
      required: [true, "Service image is required"],
    },

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);

export default Service;