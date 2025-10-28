const express = require("express");
const router = express.Router();
const controller = require("./SchoolController.js");

router.post("/", controller.create);
router.get("/", controller.getSchools);
router.get("/:id", controller.getSchoolById);
router.put("/:id", controller.updateSchool);
router.delete("/:id", controller.deleteSchool);

module.exports = router;
