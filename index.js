const express = require("express")
const app = express()
require("dotenv").config();

const port = process.env.PORT
const connectDB = require("./config/dbConfig");

// importing routes
const addUserRoute = require("./routes/addUserRouter");
const carRoutes = require("./routes/carRoutes")


// connect to db
 connectDB();


//Middleware
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/user", addUserRoute);
app.use("/car", carRoutes);

app.get("/", (req, res)=>{
    res.send("Website running")
});

app.post("/test", (req, res) => {
	console.log(req.body);
    res.send("you have posted");
});


// this should always be the last line in the server file
app.listen(port, () =>console.log(`server is running at http://localhost:${port}`));
// this is a call back