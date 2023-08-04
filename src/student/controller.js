const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows[0]);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  //check email exists
  pool.query(queries.checkEmailExist, [email], (err, result) => {
    if (result.rows.length) {
      return res.status(409).send("Email already exist!");
    }
    //add student to db
    pool.query(queries.addStudent, [name, email, age, dob], (err, result) => {
      if (err) throw err;
      else {
        res.status(201).send("Student Added Succesfully!");
      }
    });
  });
};

const removeStudent = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (err, result) => {
    if (!result.rows.length) {
      res.send("Student not found!");
    }
    pool.query(queries.removeStudent, [id], (err, result) => {
      if (err){ 
        throw err;
      }
      else {
        res.status(200).send("Student delete successfully");
      }
    });
  });
};

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const {name} = req.body;

    pool.query(queries.getStudentById, [id], (err, result) => {
        if(!result.rows.length){
            res.send('Student does not exist!')
        }

        pool.query(queries.updateStudent, [name, id], (err,result) => {
            if(err){
                throw err;
            } else {
                res.status(200).send('Student updated successfully')
            }
        })
    })
}

module.exports = { getStudents, getStudentById, addStudent, removeStudent, updateStudent };
