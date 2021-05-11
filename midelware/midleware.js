const { validationResult, check } = require("express-validator");

exports.registerValidate = () => [
    check("name", "name is required").notEmpty(),
    check("email", "should be email").isEmail(),
    // check("age", "password is required").notEmpty(),
    check("age", "enter a valid password").isLength({ min: 2 }),
];
exports.validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
