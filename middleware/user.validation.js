import { body } from "express-validator";

export const validateUser = [
  body("username").notEmpty().withMessage("userName is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characers"),
  body("gender").notEmpty().withMessage("Select the gender"),
];
