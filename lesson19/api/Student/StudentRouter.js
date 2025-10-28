const express = require("express");
const router = express.Router();
const controller = require("./StudentController");

router.post("/", controller.createStudent);
router.get("/", controller.getStudents);
router.get("/:id", controller.getStudentById);
router.put("/:id", controller.updateStudent);
router.delete("/:id", controller.delete);

module.exports = router;
