const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticationToken = require("../utils/validation");

// Get user profile
router.get("/get-user/:userId", authenticationToken, userController.getUserProfile);

// get all user profileImg, firstName, id, emailAddress
router.get("/get-all-users", authenticationToken, userController.getAllUsersProfile);

// Update user profile
router.put("/update-user/:userId", authenticationToken, userController.updateUserProfile);

// change password
router.put("/change-password/:userId", authenticationToken, userController.changePassword);

// forgot password
router.put("/forgot-password", userController.forgotPassword);

// verify user email
router.get("/verify-email/:emailAddress", userController.verifyEmail);

// Route for account deletion request
router.post('/request-account-deletion', userController.requestAccountDeletion);
// Delete user profile
router.delete("/delete-user/:userId", authenticationToken, userController.deleteUserProfile);

// send friend request
router.post("/friend-request", authenticationToken, userController.sendFriendRequest);

// get all friend request
router.get("/friend-request/:userId", authenticationToken, userController.showAllFriendRequest);

// get all sent friend request
router.get("/sent-friend-request/:userId", authenticationToken, userController.getSentFriendRequests);

// accept friend request
router.post("/friend-request/accept", authenticationToken, userController.acceptFriendRequest);

// get all login friends
router.get("/accepted-friends/:userId", authenticationToken, userController.loginFriends);

// get user friends
router.get("/friends/:userId", authenticationToken, userController.getUserFriends);

// get all users
router.get("/all-users/:userId", authenticationToken, userController.getAllUsers);

// add new notification
router.post("/notification/:userId", authenticationToken, userController.postNotification);

// read notification
router.put("/notification/:userId", authenticationToken, userController.getNotifications);

// restricted account api
// add restricted account
router.post("/restricted-account", authenticationToken, userController.addToRestrictedAccount);

// remove restricted account
router.post("/remove-restricted-account", authenticationToken, userController.removeFromRestrictedAccount);

// get all restricted account
router.get("/get-restricted-account/:userId", authenticationToken, userController.fetchRestrictedAccounts);

// fetch users info by ids
router.get("/fetch-users-info", userController.fetchUsersById);

module.exports = router;