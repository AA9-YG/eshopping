// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcrypt");
// const { User, validateUser } = require("../models/user");

// router.post("/", async (req, res) => {
//     console.log(req.body);
//     const { error } = validateUser(req.body);
//     if (error) return res.status(404).send(error.details[0].message);

//     let email = await User.findOne({ email: req.body.email });
//     if (email) return res.status(400).send("user email already exists");
    
//     let user = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//     });
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(user.password, salt);
//     await user.save();

//     const token = user.generateAuthToken();

//     res
//       .header("x-auth-token", token)
//       .header("access-control-expose-headers", "x-auth-token")
//       .send(user);
// });

// module.exports = router;