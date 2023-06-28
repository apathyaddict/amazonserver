const express = require("express");
const router = express.Router();
searchController = require('../Controllers/getPricesApi')


router.get('/search', searchController.getPricesApi)


module.exports = router;