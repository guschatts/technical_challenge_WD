const router = require("express").Router();
const mongoose = require("mongoose");
const Phone = require("../models/Phone.model");

//all the phones

router.get("/phones", (req, res) => {
  Phone.find()
    .then((allPhones) => res.json(allPhones))
    .catch((err) => console.log(err));
});

//specific phone

router.get("/phones/:id", (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Phone.findById(id)
    .then((foundPhone) => res.json(foundPhone))
    .catch((err) => console.log(err));
});

module.exports = router;
