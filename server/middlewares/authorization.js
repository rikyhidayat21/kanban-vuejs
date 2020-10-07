const { Task } = require('../models')

function authorization(req, res, next) {
  let { id } = req.params
  Task.findByPk(id)
    .then(task => {
      if (!task) throw { msg: 'task not found'}
      else if (task.UserId == req.userData.id) next()
      else throw { msg: `you aren't authorize`}
    })
    .catch(err => { next(err) })
}

module.exports = authorization