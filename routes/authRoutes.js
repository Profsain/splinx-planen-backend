const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Register user
router.post("/register", authController.registerUser);

// Login user
router.post("/login", authController.loginUser);

// Forgot password
router.post("/forgot-password", authController.forgotPassword);

// Endpoint to check if user exists by email
router.post("/check-email", userController.checkUserByEmail);

// Endpoint to check if user exists by phone number
router.post("/check-phone", userController.checkUserByPhone);

module.exports = router;