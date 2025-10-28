const User = require("./UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async function (req, res) {
  try {
    const { firstName, lastName, email, password, birthday } = req.body;

    if (!firstName || !lastName || !email || !password || !birthday) {
      return res.status(400).json({
        message:
          "Body needs to contain first name, last name, email, password and birthday",
      });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters" });
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password)) {
      return res
        .status(400)
        .json({ message: "Password must include upper, lower, digit" });
    }

    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      birthday: new Date(birthday),
    });

    const savedUser = await newUser.save();

    const jwtSecret =
      process.env.JWT_SECRET || "secret-key-change-in-production";
    const token = jwt.sign(
      {
        userId: savedUser._id,
        email: savedUser.email,
      },
      jwtSecret,
      {
        expiresIn: "24h",
      }
    );

    const userResponse = {
      _id: savedUser._id,
      firstName: savedUser.firstName,
      lastName: savedUser.lastName,
      email: savedUser.email,
      birthday: savedUser.birthday,
      createdAt: savedUser.createdAt,
      updatedAt: savedUser.updatedAt,
    };
    res
      .status(201)
      .json({ message: "Registration succeeded", userResponse, token: token });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "email already exists in database" });
    } else {
      res.status(500).json({ message: "Error while registering new user" });
    }
  }
};

exports.login = async function (req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "email and password required" });
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ message: "email incorrect" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "password incorrect" });
    }

    const jwtSecret =
      process.env.JWT_SECRET || "secret-key-change-in-production";
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      jwtSecret,
      {
        expiresIn: "24h",
      }
    );

    const userResponse = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      birthday: user.birthday,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    res
      .status(200)
      .json({ message: "login success", user: userResponse, token: token });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "error while logging in", error: err.message });
  }
};
