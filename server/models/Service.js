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

    category: {
      type: String,
      required: [true, "Service category is required"],
      enum: [
        "Hair",
        "Braiding",
        "Nails",
        "Makeup",
        "Facial",
        "Barber",
        "Spa",
        "Other",
      ],
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