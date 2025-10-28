const express = require("express");
const router = express.Router();
const controller = require("./storeController");
const { authenticateToken } = require("../Users/authMiddleware");

router.post("/", controller.createProduct);
router.get("/", authenticateToken, controller.getAllProducts);
router.get("/:id", authenticateToken, controller.getProductById);
router.put("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);

module.exports = router;
