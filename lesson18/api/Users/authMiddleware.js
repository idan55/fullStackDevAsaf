const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("./UserModel");

const verifyAsync = promisify(jwt.verify);

exports.authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    console.log("token ", token);
    if (!token) {
      return res.status(401).json({
        message: "Access restricted - authentication token not found",
      });
    }
    const jwtSecret = process.env.JWT_SECRET || "Idan Hatotach";
    const decoded = await verifyAsync(token, jwtSecret);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(402).json({ message: "user not in system" });
    }
    req.user = {
      userId: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    next();
  } catch (err) {
    return res.status(403).json({ message: "Token invalid or expired" });
  }
};
