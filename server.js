console.clear();
const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const router = require("./Route/user");
// require("dotenv").config();
connectDB();
app.use(express.json());

app.use("/rest", router);

const port = 5000;
app.listen(port, () => {
    console.log(`le port is running ${port}`);
});
