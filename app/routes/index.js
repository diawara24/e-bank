const express = require('express');
const router = express();
const userRoutes = require('./users.js'); 
const compteRoutes = require('./comptes.js'); 


router.use("/auth", userRoutes);
router.use("/comptes", compteRoutes);




module.exports = router;