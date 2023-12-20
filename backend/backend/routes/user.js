const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Routes
router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getUserById);
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.put("/:userId", userController.updateUserById);
router.delete("/:userId", userController.deleteUserById);
router.post("/logout", userController.logoutUser);

module.exports = router;
