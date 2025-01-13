const express  = require("express");
const router = express.Router(); 
const Register = require("../controller/user-controller");
const SignUpSchema = require("../validation");
const validate = require("../Middleware/Validate-Middleware")

router.route("/user").post(validate(SignUpSchema),Register)

module.exports = router;
