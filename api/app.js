const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user");
const connectRoute = require("./routes/userConnect");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


// mongodb connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res) => {
    console.log("Database is connected");
}).catch(error => {
    console.log(error);
});


// routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/connect", connectRoute);


// server connection
app.listen(5000, function () {
    console.log("server is running on port 5000");
});