import express from "express";
const app = express();

app.listen(3001, () => {
  console.log("server is runnign on port 3001");
});

app.get("/", (req, res) => {
  res.send("request receieved");
});
