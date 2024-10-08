const express = require('express');
const router = express.Router();
const withdrawalController = require('../controllers/withdrawalController');

// make a withdrawal request
router.post('/withdraw-request', withdrawalController.submitWithdrawalRequest);

// approve a withdrawal request
router.put('/approval/:id', withdrawalController.approveWithdrawal);

// deny a withdrawal request
router.delete('/denied/:id', withdrawalController.denyWithdrawal);

// fetch all withdrawals
router.get('/withdrawals', withdrawalController.fetchAllWithdrawals);

module.exports = router;
