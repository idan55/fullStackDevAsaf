const { Types } = require("mongoose");
const School = require("./SchoolModel");

exports.create = async function (req, res) {
  try {
    const school = await School.create(req.body);
    res.json({ message: "School added succesfully!", school });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSchools = async function (req, res) {
  try {
    const schools = await School.find().populate({
      path: "students",
    });
    if (schools.length == 0) {
      return res.status(404).json({ message: "No schools found" });
    }
    res.json(schools);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSchoolById = async function (req, res) {
  try {
    const id = req.params.id;
    if (!Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Id invalid" });
    }
    const school = await School.findById(id).populate({
      path: "students",
    });
    if (!school) {
      return res.status(404).json({ message: "School not found" });
    }
    res.json(school);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSchool = async function (req, res) {
  try {
    const id = req.params.id.trim();
    // if (!Types.ObjectId.isValid(id)) {
    //   return res.status(404).json({ message: "Id invalid" });
    // }
    const school = await School.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      //   overwrite: true,
    });
    if (!school) {
      return res.status(404).json({ message: "School not found" });
    }
    res.json({ message: "School updated succesfully", school });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.deleteSchool = async function (req, res) {
  try {
    const id = req.params.id;
    if (!Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Id invalid" });
    }
    const school = await School.findByIdAndDelete(id);
    if (!school) {
      return res.status(404).json({ message: "School not found" });
    }
    res.json({ message: "School deleted succesfully", school });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
