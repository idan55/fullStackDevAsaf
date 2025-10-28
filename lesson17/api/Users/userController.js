const User = require("./UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async function (req, res) {
  try {
    const { firstName, lastName, email, password, birthday } = req.body || {};

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters long" });
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
      birthday,
    });

    const savedUser = await newUser.save();

    const userResponse = {
      message: `welcome ${firstName}, you have succesfuly been registered`,
      firstName: savedUser.firstName,
      lastName: savedUser.lastName,
      email: savedUser.email,
      birthday: savedUser.birthday,
    };
    res.json(userResponse);
  } catch (err) {
    res
      .status(500)
      .json({ error: err.message /*"Error while registering new user"*/ });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "email and password required" });
    }

    const user = await User.findOne({email: email});
    if (!user) {
      return res.status(401).json({ message: "email incorrect" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Password incorrect" });
    }

    const jwtSecret = process.env.JWT_SECRET || "Idan-Ha-Melech";
    const token = jwt.sign(
      {
        userId: user._id,
      },
      jwtSecret,
      { expiresIn: "24h" }
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
      .status(201)
      .json({ message: "Login successful!", userResponse, token: token });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error while logging in", error: err.message });
  }
};