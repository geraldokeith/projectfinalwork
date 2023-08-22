const Battery = require("../models/Battery");


const newBattery = async (req, res) => {
	try {
		if (
			!req.body.name ||
			!req.body.idnumber ||
			!req.body.phonenumber ||
			!req.body.receipt ||
			!req.body.size ||
            !req.body.price ||
            !req.body.time ||
            !req.body.date 
		
		) {
			throw new Error(" missing fields");
		}

		const newBattery = new Battery({
			name: req.body.name,
			idnumber: req.body.idnumber,
			phonenumber: req.body.phonenumber,
			receipt: req.body.receipt,
			size: req.body.size,
            time: req.body.time,
            price: req.body.price,
            date: req.body.date,
		});

		await newBattery.save();
		// return a reponse
		res.status(200).json({
			success: "battery has been added",
		});
	} catch (error) {
		console.log(error);
		res.status(200).json({
			error: `${error.message}`,
		});

		
	}
};

module.exports = {newBattery};