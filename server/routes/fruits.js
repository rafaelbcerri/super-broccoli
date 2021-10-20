const { Router } = require('express');
const { getFruits, createFruit } = require('../controller/fruits');

const router = Router();

router.get('/', getFruits)
router.post('/',createFruit)

module.exports = router;
