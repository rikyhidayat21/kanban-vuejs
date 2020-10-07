const router = require('express').Router()
const user = require('./userRouter')
const task = require('./taskRouter')

router.use('/', user)
router.use('/', task)


module.exports = router