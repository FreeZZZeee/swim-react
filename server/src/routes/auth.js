const express = require('express')
const {signup, signin, requiresSignin} = require("../controllers/auth");
const router = express.Router()



router.post('/signin', signin)
router.post('/signup', signup)

router.post('/profile', requiresSignin, (req, res) => {
    res.status(200).json({user: 'profile'})
})

module.exports = router