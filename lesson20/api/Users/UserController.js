const User = require("./UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async function (req, res) {
  try {
    const { firstname, lastname, email, password, birthday } = req.body || {};
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 caharacters long" });
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password)) {
      return res
        .status(400)
        .json({ message: "Password must include upper, lower, digit" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      birthday,
    });

    const userResponse = {
      firstName: `Welcome: ${newUser.firstname}, you have successfully been registered`,
      lastName: newUser.lastname,
      email: newUser.email,
      birthday: newUser.birthday,
    };
    res.json({ message: "registration completed", userResponse });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async function (req, res) {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(404).json({ message: "Missing email or password" });
    }
    const user = await User.findOne({ email: email });
    if (!user)
      return res.status(404).json({ message: "Email not found in DB" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(500).json({ message: "password incorrect" });

    const jwtSecret = process.env.JWT_SECRET || "Idan Hamelech";
    const token = jwt.sign(
      {
        id: user._id,
      },
      jwtSecret,
      { expiresIn: "24h" }
    );
    const userResponse = {
      id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      birthday: user.birthday,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    res.json({
      message: `Welcome back: ${user.firstname}, you are successfully logged in.`,
      userResponse,
      token: token,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "error while logging in", error: err.message });
  }
};
