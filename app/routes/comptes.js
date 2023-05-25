const express = require('express');
const router = express();
const auth = require('../middleware/auth.js');
const compteCtrl = require('../controllers/comptes.js');

// router.get("/", auth, compteCtrl.findAll)
// router.get("/:idUser", auth, compteCtrl.findById)
router.post("/", auth, compteCtrl.add)
router.put("/:idUser/:idCompte", auth, compteCtrl.update)
router.delete("/:id", auth, compteCtrl.delete)

module.exports = router;