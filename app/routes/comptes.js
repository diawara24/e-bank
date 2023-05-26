const express = require('express');
const router = express();
const auth = require('../middleware/auth.js');
const compteCtrl = require('../controllers/comptes.js');


router.get("/", auth, compteCtrl.get)
router.post("/", auth, compteCtrl.add)
router.put("/:id", auth, compteCtrl.update)
router.delete("/:id", auth, compteCtrl.delete)

module.exports = router;