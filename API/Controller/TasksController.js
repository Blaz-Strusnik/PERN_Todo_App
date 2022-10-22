const { Sequelize, Models, DataType } = require('sequelize')
const Tasks = require("../Models/Task")

exports.getTasks = (req, res, next) => {
  Tasks.findAll({order: [["createdAt", "DESC"]]}).then(tasks => {
    res.status(200).json({
      tasks: tasks

    })
  })
}

exports.postTasks = async (req, res, next) => {
  const { taskDesc, startdate, enddate } = req.body
  try {
    const newTasks = await Tasks.create({
      taskDesc: taskDesc,
      startdate: startdate,
      enddate: enddate
    })
    res.status(200).json({
      newEntry: newTasks
    })
  } catch (error) {
    console.log(error)
  }

}

exports.updateTasks = async (req, res, next) => {
  const id = req.params.id
  const { taskDesc, startdate, enddate } = req.body
  try {
    const editedTasks = await Tasks.update({
      taskDesc: taskDesc,
      startdate: startdate,
      enddate: enddate
    }, {
      where: {
        id: id
      }
    })
    res.status(200).json({
      status: "Updated"
    })
  } catch (error) {
    console.log(error)
  }
}

exports.deleteTasks = async (req, res, next) => {
  const id = req.params.id
  const { taskDesc } = req.body
  try {
    const deleteTasks = await Tasks.destroy(
      { where: { id: id } })
    res.status(200).json({
      status: "Deleted"
    })
  } catch (error) {
    console.log(error)
  }
}