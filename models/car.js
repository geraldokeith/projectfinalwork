const mongoose = require('mongoose')
const carSchema = new mongoose.Schema({
	name: { type: String, trim: true },
	numberplate: { type: String, unique: true, trim: true },
	phonenumber: { type: String, unique: true, trim: true },
	carcolour: { type: String, trim: true },
    carmodel: { type: String, trim: true },
    time: { type: String},
    date: { type: Date},
  cartype: { type: String, enum: ["truck", "taxis", "bodabodas", "coasters", "personalcars"], default: "normal"},
	
});




module.exports = mongoose.model('car', carSchema);