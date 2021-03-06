const express = require('express')
const router = express.Router();
const orderCtrl = require('../../controllers/api/orders');

router.post("/", orderCtrl.create);

module.exports = router;