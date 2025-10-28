const express = require("express");
const controller = require("./SongController");
const { authenticateToken } = require("../Users/authMiddleware.js");
const router = express.Router();

router.get("/top", authenticateToken, controller.getTopSongs);
router.get("/genre/:genre", authenticateToken, controller.getSongByGenre);
router.post("/", controller.createSong);
router.get("/", authenticateToken, controller.getAllSongs);
router.get("/:id", authenticateToken, controller.getSongById);
router.put("/:id", controller.updateSong);
router.delete("/:id", controller.deleteSong);

module.exports = router;
