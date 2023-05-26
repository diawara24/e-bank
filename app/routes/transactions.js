const express = require('express');
const router = express();
const auth = require('../middleware/auth.js');
const transactionCtrl = require('../controllers/transactions.js');

router.post("/", auth, transactionCtrl.add);






module.exports = router;