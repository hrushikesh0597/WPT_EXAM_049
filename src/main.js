const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const { addMassage, selectAllMassages } = require("./1");

app.get("/massages", async (req, res) => {
  const list = await selectAllMassages();
  res.json(list);
});

app.post("/add-massage", async (req, res) => {
  const text = req.body;
  await addMassage(text);
  res.json({ massage: "massage added !" });
});

app.listen(4000, () => {
  console.log("server start");
});
