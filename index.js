const express = require("express")
const app = express()
const dotenv = require("dotenv").config();
const path = require('path');
const port = process.env.PORT
const connectDB = require("./config/dbConfig");

// importing routes
const addUserRouter = require("./routes/addUserRouter");
const carRoutes = require("./routes/carRoutes");
const tireRouter = require("./routes/tireRouter");
const batteryRouter = require("./routes/batteryRouter")
// connect to db
 connectDB();


//Middleware
app.use(express.urlencoded({ extended: true }));


app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')))
//Routes
app.use("/api", addUserRouter);
app.use("/api", carRoutes);
app.use("/api", tireRouter);
app.use("/api", batteryRouter);

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