const express = require('express');
const {connexion,inscription} = require('../Controllers/authController')
const router = express.Router()

router.post("/sign-in", connexion)
router.post("/sign-up", inscription)

module.exports = router