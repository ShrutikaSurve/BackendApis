const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./Config/Db");
const dotenv = require("dotenv");
// const authRouter = require("./MVC/Routes");

const app = express();
dotenv.config();

//Middleware
app.use(cors());
app.use(morgan("dev")); 
app.use(express.json());

//Connect to DB
connectDb();

//Test Route
app.get("/", (req, res) => {
    res.send("HELLO THIS IS TESTING API");
})

//App.used api

app.use("/backend", require("./MVC/Routes/authRoute"));

//Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening the port ${port}`);
})


 