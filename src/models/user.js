const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");
const Joi = require("joi");


const userSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 20},
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {type: String, required: true, minlength: 5, maxlength: 1024},
    isAdmin: Boolean
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        {
            _id: this.id,
            isAdmin: this.isAdmin,
            email: this.email,
            name: this.name,
        },
        config.get("jwtPrivateKey") 
    );
    return token;
}

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  });
  return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;
exports.userSchema = userSchema;
