import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async ({ name, email, password }) => {
  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate token
    const token = generateToken(user._id);

    return {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    };
  } catch (error) {
    // Validation errors
    if (error.name === "ValidationError") {
      throw new Error("Please provide all required fields");
    }

    // Duplicate email
    if (error.code === 11000) {
      throw new Error("User with this email already exists");
    }

    throw error;
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid email or password");
    }

    // Generate token
    const token = generateToken(user._id);

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    };
  } catch (error) {
    throw error;
  }
};