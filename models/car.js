const mongoose = require('mongoose')
const carSchema = new mongoose.Schema({
  gender:{type: String, enum:["male", "female"]},
	name: { type: String, trim: true },
  idnumber: { type: String, unique: true, trim: true },
	numberplate: { type: String, unique: true, trim: true },
	phonenumber: { type: String, unique: true, trim: true },
	carcolour: { type: String, trim: true },
  receipt: { type: String, trim: true },
    carmodel: { type: String, trim: true },
    time: { type: String},
    date: { type: Date},
  cartype: { type: String, enum: ["truck", "taxi", "bodaboda", "coaster", "personal-car"]},
	
});




module.exports = mongoose.model('Car', carSchema);