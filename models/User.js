const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Userrr = new schema({
    name: String,
    age: Number,
    email: { required: true, unique: true, type: String },
});
module.exports = mongoose.model("User", Userrr);
