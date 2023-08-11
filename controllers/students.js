const models = require("../models/index");
const controllers = {};
console.log(models)
controllers.getAll = async (req, res) => {
  try {
    const allStudent = await models.students.findAll();
    if (!allStudent) {
      return res.status(404).json({ message: "Data not Found!" });
    } else {
      return res.status(200).json(allStudent);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = controllers;
