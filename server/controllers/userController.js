const { User } = require('../models')
const { comparePass} = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');


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
          organization: user.organization,
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

  static googleSign(req, res, next) {
    let email = null
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    client.verifyIdToken({
      idToken: req.body.idToken,
      audience: process.env.GOOGLE_CLIENT_ID
    })
      .then(ticket => {
        let payload = ticket.getPayload()
        email = payload.email
        return User.findOne({
          where: {
            email
          }
        })
      })
      .then(user => {
        if(user) return user
        else {
          return User.create({
            email,
            password: 'googlepasswordmantap'
          })
        }
      })
      .then(user => {
        let newPayload = {
          email: user.email,
          id: user.id
        }
        let jwtToken = generateToken(newPayload)
        res.status(200).json({ jwtToken })
      })
      .catch(err => next(err, '<< error dari google sing in controller'))
  }

}

module.exports = UserController