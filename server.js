const express = require("express");
const app = express();
const studentRoutes = require("./src/student/routes");
const bodyParser = require("body-parser");
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello again bitch");
});

app.use("/api/v1/students", studentRoutes);

// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
