const express = require("express");
const router = express.Router();
const {newTire} = require("../controllers/newTire");

router.post("/", newTire);

router.put("/",)



module.exports = router;