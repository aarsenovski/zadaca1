const express = require("express");
const connectDB = require("./db/config");

connectDB();

const {
  getAllUniversities,
  createUniversity,
  updateUniversity,
  removeUniversity,
} = require("./handlers/universityHandler");

const app = express();

app.use(express.json());

app.get("/universities", getAllUniversities);
app.post("/universities", createUniversity);
app.put("/universities/:id", updateUniversity);
app.delete("/universities/:id", removeUniversity);

app.listen(3000, () => console.log(`Server started at port 3000`));
