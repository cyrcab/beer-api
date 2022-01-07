const router = require("express").Router();
const { handleFindBeer } = require('../controllers/beer');

router.get("/", [handleFindBeer]);

module.exports = router;
