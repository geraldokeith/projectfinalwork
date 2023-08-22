const express = require("express");
const router = express.Router();
const {newBattery} = require("../controllers/newBattery");

router.post("/", newBattery);

router.put("/",)



module.exports = router;