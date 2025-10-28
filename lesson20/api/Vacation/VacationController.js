const Vacation = require("./VacationModel");

exports.createVacation = async function (req, res) {
  try {
    const vacation = await Vacation.create(req.body);
    res.json({ message: "Vacation added successfully", vacation });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getVacations = async (req, res) => {
  try {
    const vacations = await Vacation.find();
    if (vacations.length == 0) {
      return res.status(500).json({ message: "no vacations found" });
    }
    res.json(vacations);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getVacationsById = async function (req, res) {
  try {
    const id = req.params.id;
    if (!Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Id invalid" });
    }
    const vacation = await Vacation.findById(id);
    if (!vacation) {
        return res.status(400).json({ message: "no vacation found" });
    }
    res.json(vacation);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateVacation = async function(req, res){
    try{
        const id = req.params.id
        if(!Types.ObjectId.isValid(id)){
            return res.status(404).json({ message: "Id invalid" });
        }
        const vacation = await Vacation.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        if(!vacation){
            return res.status(400).json({ message: "no vacations found" });
        }
    }
}
