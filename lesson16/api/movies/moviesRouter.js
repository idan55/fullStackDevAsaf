const express = require("express");
const router = express.Router();
const controller = require("./moviesController");
const { authenticateToken } = require("../users/authMiddleware");

router.get("/", authenticateToken, controller.get);
router.post("/", authenticateToken, controller.post);
router.put("/:id", authenticateToken, controller.put);
router.delete("/:id", authenticateToken, controller.delete);
router.get(
  "/price/above/:amount",
  authenticateToken,
  controller.getMoviesAboveAmount
);
router.get(
  "/price/below/:amount",
  authenticateToken,
  controller.getMoviesBelowAmount
);
router.get(
  "/search/title/:title",
  authenticateToken,
  controller.getMoviesByTitle
);
router.get(
  "/search/director/:director",
  authenticateToken,
  controller.getMoviesByDirector
);
router.get("/showing", authenticateToken, controller.getMoviesShowing);
router.get(
  "/count/showing",
  authenticateToken,
  controller.getMoviesCountcShowing
);
router.get("/:id", authenticateToken, controller.getMovieById);

module.exports = router;
