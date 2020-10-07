'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task, { foreignKey: 'UserId' })
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: { args: true, msg: 'email format is wrong'},
        notEmpty: { args: true, msg: 'email is required'},
        notNull: { args: true, msg: 'email is required'}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: 'password is required'},
        notNull: { args: true, msg: ' password is required'},
        len: { args: [6, 32], msg: 'passowrd characters between 6 and 32'}
      }
    },
    organization: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: user => {
        user.organization = 'Hactiv8',
        user.password = hashPass(user.password)
      }
    }
  });
  return User;
};