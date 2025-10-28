const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      // validate: {
      //   validator: function (value) {
      //     return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z0-9!@#$%^&*()_\-+=\[{\]};:'",.<>/?\\|~]+$`/.test(
      //       value
      //     );
      //   },
      //   message:
      //     "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      // },
    },
    birthday: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema, "users");
