import { validationResult } from "express-validator";

export const getuser = (req, res) => {
  res.render("users");
};

export const createUser = (req, res) => {
  const errors = validationResult(req);
  console.log(errors, "errors in creae users");
  if (errors.isEmpty()) {
    res.send(`user ${req.body.username} is created successfully:::`);
  } else {
    return res.render("users", { error: errors.array() });
  }
};
