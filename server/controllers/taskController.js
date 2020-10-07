const { Task, User } = require('../models')

class TaskController {
  static findAll(req, res, next) {
    Task.findAll({
      // where: {
      //   UserId: req.userData.id
      // },
      include: {
        model: User
      }
    })
      .then(task => {
        res.status(200).json({ task })
      })
      .catch(err => next(err))
  }

  static create(req, res, next) {
    const { title, description, category } = req.body
    Task.create({
      title, description, category, UserId: req.userData.id
    })
      .then(task => {
        res.status(201).json({ task })
      })
      .catch(err => next(err))
  }

  static update(req, res, next) {
    const { id } = req.params
    Task.findByPk(id)
      .then(task => {
        if (!task) throw { msg: 'task not found', statusCode: 404}
        return task.update({
          ...task,
          ...req.body
        })
      })
      .then(task => {
        res.status(200).json({ task })
      })
      .catch(err => next(err))
  }

  static delete(req, res, next) {
    const { id } = req.params
    Task.findByPk(id)
      .then(task => {
        if (!task) throw { msg: 'task not found', statusCode: 404}
        task.destroy()
        res.status(200).json({ task })
      })
      .catch(err => next(err))
  }
}

module.exports = TaskController