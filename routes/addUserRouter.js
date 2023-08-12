const express = require("express");
const router = express.Router();
const {addUser} = require("../controllers/addUser");

router.post("/", addUser);

module.exports = router