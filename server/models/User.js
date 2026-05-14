import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // BASIC INFO
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    phone: {
      type: String,
      default: "",
    },

    avatar: {
      type: String,
      default: "",
    },

    // ROLE SYSTEM
    role: {
      type: String,
      enum: ["customer", "stylist", "admin", "superadmin"],
      default: "customer",
    },

    // ROLE REQUEST SYSTEM
    roleRequest: {
      requestedRole: {
        type: String,
        enum: ["stylist", "admin"],
        default: null,
      },

      requestedDate: {
        type: Date,
        default: null,
      },

      status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: null,
      },

      adminNotes: {
        type: String,
        default: null,
      },
    },

    // ACCOUNT STATUS
    isActive: {
      type: Boolean,
      default: true,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    // CUSTOMER FEATURES
    loyaltyPoints: {
      type: Number,
      default: 0,
    },

    favoriteServices: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
      },
    ],

    favoriteStylists: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    // SECURITY
    lastLogin: {
      type: Date,
      default: null,
    },

    passwordChangedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;