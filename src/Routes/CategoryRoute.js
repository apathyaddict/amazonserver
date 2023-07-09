const express = require("express");
const router = express.Router();
searchController = require('../Controllers/getCategoryApi')


router.get('/category', searchController.getCategoryApi)


module.exports = router;  