const Tire = require("../models/Tire")


const newTire = async (req, res) => {
	try {
		if (
			!req.body.name ||
			!req.body.idnumber ||
			!req.body.phonenumber ||
			!req.body.receiptnumber ||
			!req.body.gender ||
            !req.body.time ||
            !req.body.date ||
			!req.body.prices ||
            !req.body.services ||
            !req.body.tiresize

		) {
			throw new Error("Invalid or missing fields");
		}

		const newTire = new Tire({
			name: req.body.name,
			idnumber: req.body.idnumber,
			phonenumber: req.body.phonenumber,
			receiptnumber: req.body.receiptnumber,
			gender: req.body.gender,
            time: req.body.time,
            date: req.body.date,
			prices: req.body.pirces,
            services:req.body.services,
            tiresize:req.body.tiresize,
		});

		await newTire.save();
		// return a reponse
		res.status(200).json({
			success: "tire info  has been added",
		});
	} catch (error) {
		console.log(error);
		res.status(200).json({
			error: `${error.message}`,
		});

		
	}
};

module.exports = {newTire};