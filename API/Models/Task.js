const {Sequeilze, DataTypes} = require('sequelize')
const sequelize = require('../config/dbconn')

const tasks = sequelize.define('tasks', {
  task_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  taskDesc: DataTypes.STRING,
  startdate: DataTypes.DATE,
  enddate: DataTypes.DATE
})

module.exports = tasks