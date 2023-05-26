const express = require('express');
const router = express();
const auth = require('../middleware/auth.js');
const categorieCtrl = require('../controllers/categories.js');

router.post("/", auth, categorieCtrl.add);
router.put("/:id", auth, categorieCtrl.update);
router.delete("/:id", auth, categorieCtrl.delete);


module.exports = router;