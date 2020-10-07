const { User } = require('../models')
const { comparePass} = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
  static register(req, res, next) {
    const { email, password } = req.body
    User.create({
      email, password
    })
      .then(user => {
        res.status(201).json({
          id: user.id,
          email: user.email,
          msg: 'register success folks!'
        })
      })
      .catch(err => {
        next(err)
      })
  }

  static login(req, res, next) {
    const { email, password } = req.body
    User.findOne({
      where: { email }
    })
      .then(user => {
        if(!user) throw { msg : 'invalid email or password'}
        let comparePassword = comparePass(password, user.password)
        if(!comparePassword) throw { msg: 'invalid email or password'}
        let payLoad = {
          id: user.id,
          email: user.email
        }
        let access_token = generateToken(payLoad)
        res.status(200).json({ access_token })
      })
      .catch(err => next(err))
  }

}

module.exports = UserController