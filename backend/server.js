import express from "express";
const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Docker Memory Backend!" });
});

app.listen(4000, () => {
  console.log("Backend running on port 4000");
});
