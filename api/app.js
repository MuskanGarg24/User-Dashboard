const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth")

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res) => {
    console.log("Database is connected");
}).catch(error => {
    console.log(error);
});

app.use("/api/auth", authRoute);

app.listen(5000, function () {
    console.log("server is running on port 5000");
});