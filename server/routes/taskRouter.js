const router = require('express').Router()
const taskController = require('../controllers/taskController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/tasks', taskController.findAll)
router.post('/tasks', taskController.create)
router.put('/tasks/:id', authorization, taskController.update)
router.delete('/tasks/:id', authorization, taskController.delete)

module.exports = router