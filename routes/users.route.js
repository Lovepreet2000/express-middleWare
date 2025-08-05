import express from "express";
import { createUser, getuser } from "../controllers/user.controller.js";
import { validateUser } from "../middleware/user.validation.js";

const router = express.Router();

//router level middleware
router.use((req, res, next) => {
  console.log("time req res:", Date.now());
  next();
});

router.get("/", getuser);

router.post("/create", validateUser, createUser);

router.get(
  "/about/:user",
  (req, res, next) => {
    console.log(req.params, "time in seconde middleware:", Date.now());
    next();
  },
  (req, res) => {
    res.send("about user service is running on port 30001");
  }
);

router.get("/about/hello", (req, res) => {
  console.log("hello world", req.params);
  res.send("hello world:::: in hello params");
});

//error handling middleware
router.use((req, res) => {
  res.status(404).send("404 not found");
});

export default router;
