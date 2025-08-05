import express from "express";
const app = express();
import userRouter from "./routes/users.route.js";

//middleware for parsing JSON and URL-endcoded data
app.use(express.json());
app.use(express.urlencoded({ extends: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", userRouter);

app.listen(3001, () => {
  console.log("server is runnign on port 3001");
});
