const express = require('express');
const MarketController = require('../controllers/marketController');

const router = express.Router();

router.get('/', MarketController.getAll);
router.get('/id/:id', MarketController.getOne);
router.get('/zipcode/:zip', MarketController.findByZip);

module.exports = router;
