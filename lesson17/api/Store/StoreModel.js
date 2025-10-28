const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Every product needs a title"],
      unique: [true, "2 products can't have the same name"],
    },
    price: {
      type: Number,
      required: [true, "Price is missing"],
    },
    category: {
      type: String,
      required: [true, "Each items needs to be in a category"],
    },
    inStock: {
      type: Boolean,
      required: [true, "Indicate if item is available with true or false"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Store", StoreSchema, "store");
