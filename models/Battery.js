const mongoose = require('mongoose')
const BatterySchema = new mongoose.Schema({
	name: { type: String, trim: true },
	idnumber: { type: String, unique: true, trim: true },
	phonenumber: { type: String, unique: true, trim: true },
	receipt: { type: String, trim: true },
    size: { type: String, trim: true },
    price: { type: String, trim: true },
    time: { type: String},
    date: { type: Date},
  
	
});




module.exports = mongoose.model('Battery', BatterySchema);