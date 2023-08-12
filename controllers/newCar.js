const car = require("../models/car");


const newCar = async (req, res) => {
	try {
		if (
			!req.body.name ||
			!req.body.numberplate ||
			!req.body.phonenumber ||
			!req.body.carcolour ||
			!req.body.carmodel ||
            !req.body.time ||
            !req.body.date ||
			!req.body.cartype
		) {
			throw new Error("Invalid or missing fields");
		}

		const newCar = new car({
			name: req.body.name,
			numberplate: req.body.numberplate,
			phonenumber: req.body.phonenumber,
			carcolour: req.body.carcolour,
			carmodel: req.body.carmodel,
            time: req.body.time,
            date: req.body.date,
			cartype: req.body.cartype,
		});

		await newCar.save();
		// return a reponse
		res.status(200).json({
			success: "car has been added",
		});
	} catch (error) {
		console.log(error);
		res.status(200).json({
			error: `${error.message}`,
		});

		
	}
};
// editing carform
const editCar = await car.findOneAndUpdate({_id:req.params.body});


module.exports = {newCar, editCar};