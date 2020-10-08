'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User, { foreignKey: 'UserId'})
    }
  };
  Task.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: { args: true, msg: 'Title is required'},
        notNull: { args: true, msg: 'Title is required'}
      }
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: { args: true, msg: 'Description is required'},
        notNull: { args: true, msg: 'Description is required'}
      }
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: { args: true, msg: 'Category is required'},
        notNull: { args: true, msg: 'Category is required'}
      },
      defaultValue: 'backlog'
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};