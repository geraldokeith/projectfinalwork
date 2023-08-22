const express = require("express");
const router = express.Router();
// const {newCar} = require("../controllers/newCar");
const Car = require("../models/car")
//  router.post("/", newCar);

router.get("/parkingform", (req, res) => {
    res.render("parking.pug")
})

router.post("/regcar", async (req, res) => {
    try{
        const car = new Car(req.body);
        await car.save();
        res.redirect("/api/parkingform") //it gives the page we want it to redirect to.
        console.log(req.body);
    }
    catch(error){
        res.status(400).render("parking.pug");
        console.log(error);
    }

})



module.exports = router;