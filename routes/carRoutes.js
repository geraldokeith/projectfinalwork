const express = require("express");
const router = express.Router();
const {newCar} = require("../controllers/newCar");

router.post("/", newCar);


module.exports = router;