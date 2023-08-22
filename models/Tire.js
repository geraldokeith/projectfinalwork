const mongoose = require('mongoose')
const tireSchema = new mongoose.Schema({
	name: { type: String, trim: true },
	idnumber: { type: String, unique: true, trim: true },
	phonenumber: { type: String, unique: true, trim: true },
	receiptnumber: { type: String, trim: true },
    gender: { type: String, enum: ["select", "male", "female",], default: "normal"},
    time: { type: String},
    date: { type: Date},
    prices: { type: String, enum: ["select", "5000ugx", "500ugx",]},
    services: { type: String, enum: ["select", "valves", "tire", "puncture"], default: "normal"},
    tiresize: { type: String, enum: ["select","small", "medium", "large",], default: "normal"},
	
});




module.exports = mongoose.model('tire', tireSchema);