const Sequelize = require("sequelize");
const sequelize = require("../config/database/db");

const students = sequelize.define(
  "students",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    age: Sequelize.INTEGER,
    dob: Sequelize.DATE,
  },
  {
    //non-aktifkan 's'
    freezeTableName: true,
    //non-aktifkan 'timestamps'
    timestamps: false,
  }
);

module.exports = students;
