const express = require("express");
const app = express();
const studentRoutes = require("./src/student/routes");
const bodyParser = require("body-parser");
const sequelize = require("./config/database/db");
const port = 3000;

app.use(express.json());

async function test(){
  try{
    await sequelize.authenticate();
    console.log('Connect to database success!')
  } catch(err){
    console.error(err)
  }
}

test();
app.use("/api/v1/students", studentRoutes);

// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
