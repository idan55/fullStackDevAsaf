const StoreModel = require("./StoreModel");
exports.createProduct = async function (req, res) {
  try {
    const product = await StoreModel.create(req.body);
    res.json({ message: "Product added to store successfuly", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllProducts = async function (req, res) {
  try {
    const products = await StoreModel.find();
    // if (products.length === 0) {
    //   return res.json({ message: "No products to display", products: [] });
    // }
    return res.json(products);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getProductById = async function (req, res) {
  try {
    const id = (req.params.id || "").trim();
    if (!id) return res.status(400).json({ error: "Missing id" });
    const product = await StoreModel.findById(id);

    if (!product) {
      return res.status(404).json({ message: "No product found by this id" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProduct = async function (req, res) {
  try {
    const id = (req.params.id || "").trim();
    if (!id) return res.status(400).json({ error: "Missing id" });
    const product = await StoreModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      overwrite: true,
    });
    if (!product) {
      return res.status(404).json({ message: "No product found to update" });
    }
    res.json({ message: "Product updated!", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProduct = async function (req, res) {
  try {
    const id = (req.params.id || "").trim();
    if (!id) return res.status(400).json({ error: "Missing id" });
    const product = await StoreModel.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "No product found to delete" });
    }
    const products = await StoreModel.find();
    res.json({
      message: "Product deleted succesfully!",
      deletedProduct: product,
      remainingProducts: products,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
