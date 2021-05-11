const mongoose = require("mongoose");
require("dotenv").config({ path: "./Config/.env" });
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            UsecreateIndexes: true,
        });
        console.log("database is connecting");
    } catch (error) {
        console.log({ msg: "data no connectinhg", error });
    }
};
module.exports = connectDB;
