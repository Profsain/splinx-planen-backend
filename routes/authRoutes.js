const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Register user
router.post("/register", authController.registerUser);

// Login user
router.post("/login", authController.loginUser);

// Forgot password
router.post("/forgot-password", authController.forgotPassword);

// check user phone number
router.post("/check-phone-number", authController.checkUserByPhoneNumber); 

module.exports = router;