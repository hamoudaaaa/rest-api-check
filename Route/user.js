const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { registerValidate } = require("../midelware/midleware");
router.post("/add", registerValidate(), async (req, res) => {
    try {
        // const { name, email, age } = req.body;
        const usere = new User({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
        });
        await usere.save();
        res.status(200).send({ msg: "user are added", usere });
    } catch (error) {
        res.status(500).send("impossible to add user");
    }
});
router.get("/", async (req, res) => {
    try {
        const user = await User.find();

        res.status(200).send({ msg: "look for user", user });
    } catch (error) {
        res.status(500).send("error to get user");
    }
});
router.get("/:userid", async (req, res) => {
    const id = req.params.userid;
    // const { userid } = req.params;
    try {
        const usera = await User.findOne({ _id: id });

        res.status(200).send({ msg: "look for user", usera });
    } catch (error) {
        res.status(500).send("error to get user");
    }
});
router.put("/:id", async (req, res) => {
    id = req.params.id;

    try {
        const update = await User.updateOne(
            { _id: id },
            { $set: { ...req.body } }
        );
        res.status(200).send({ msg: "aremodified", update });
    } catch (error) {
        res.status(500).send("error to get user");
    }
});
router.delete("/:user_id", async (req, res) => {
    id = req.params.user_id;
    try {
        const user = await User.findOneAndRemove({ _id: id });
        res.status(200).send({ msg: "aremodified", user });
    } catch (error) {
        res.status(500).send("error to get user");
    }
});

module.exports = router;
