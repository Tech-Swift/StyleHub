import {
  registerValidation,
  loginValidation,
} from "../validations/authValidation.js";

import {
  registerUser,
  loginUser,
} from "../services/authService.js";

export const register = async (req, res, next) => {
  try {
    // Validate request body
    const { error } = registerValidation.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    // Register user
    const userData = await registerUser(req.body);

    res.status(201).json(userData);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    // Validate request body
    const { error } = loginValidation.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    // Login user
    const userData = await loginUser(req.body);

    res.json(userData);
  } catch (err) {
    next(err);
  }
};