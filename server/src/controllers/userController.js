const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signin = async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({
    username: username,
  });

  if (!user) {
    return res.status(400).json({
      status: "failed",
      message: "Username salah!",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({
      status: "failed",
      message: "Password salah!",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.json({
    status: "success",
    message: "Login berhasil!",
    token,
    isLogged: true,
  });
};

// get all user
const getAll = async (req, res) => {
  const result = await UserModel.find();
  res.send(result);
};

// UNCOMMENT THIS IF YOU WANT TO CREATE ADMIN AND DONT FORGET TO CREATE THE ROUTE TOO

// const signup = async (req, res) => {
//     console.log(req.body);
//     const {
//         username,
//         password
//     } = req.body;

//     // hash password
//     const hashedPassword = await bcrypt.hash(password, 15);

//     await UserModel.create({
//         username: username,
//         password: hashedPassword
//     });

//     res.send('okay');
// }

module.exports = {
  signin,
  getAll,
};
