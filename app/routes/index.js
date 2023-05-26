const express = require('express');
const router = express();
const userRoutes = require('./users.js'); 
const compteRoutes = require('./comptes.js'); 
const categorieRoutes = require('./categories.js'); 
const transactionRoutes = require('./transactions.js'); 


router.use("/auth", userRoutes);
router.use("/comptes", compteRoutes);
router.use("/categories", categorieRoutes);
router.use("/transactions", transactionRoutes);





module.exports = router;