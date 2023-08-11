const { Router } = require("express");
const controllers = require("../../controllers/index");
// const controller = require("../../controllers/controller");

const router = Router();

router.get('/', controllers.students.getAll);
// router.get("/", controller.getStudents);

// router.post('/', controller.addStudent);
// router.get("/:id", controller.getStudentById);
// router.put('/:id', controller.updateStudent);
// router.delete('/:id', controller.removeStudent);
module.exports = router;
