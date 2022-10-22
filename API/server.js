const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require('./config/dbconn')
const routes = require('./Router/routes')
const helmet = require("helmet");
var csrf = require('csurf');


var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(helmet());
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// ROUTES 
app.use(routes)

app.use(csrf());

app.use(function(req, res, next) {
  res.locals._csrf = req.csrfToken();
  next();
});
// using sql
//get all tasks
// app.get("/tasks", async (req, res) => {
//     try {
//         const allTask = await pool.query("SELECT * FROM task ORDER BY task_id DESC");
//         res.json(allTask.rows);
//     } catch (error) {
//         console.error(error.message)
//     }

// });

// // Create route
// app.post("/tasks", async (req, res) => {
//     try {
//         const { taskDesc } = req.body;
//         console.log(taskDesc)
//         const newTask = await pool.query("INSERT INTO task (taskDesc) VALUES($1) RETURNING *", [taskDesc]);
//         res.json(newTask.rows[0]);
//     } catch (error) {
//         console.log("error " + error.message);
//     }
// });

// get a task
// app.get("/tasks/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const task = await pool.query("SELECT * FROM task WHERE task_id = $1", [id]);
//         res.json(task.rows[0]);
//     } catch (error) {
//         console.error(error.message)
//     }

// });
// edit task
// app.put("/tasks/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const {
//             taskDesc
//         } = req.body;
//         const updateTask = await pool.query("UPDATE task SET taskDesc = $1 WHERE task_id = $2", [taskDesc, id]);
//         res.json("updated");
//     } catch (error) {
//         console.error(error.message)
//     }
// });
// delete task
// app.delete("/tasks/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleteTask = await pool.query("DELETE FROM task WHERE task_id = $1", [id]);
//         res.json("Task was deleted!");
//     } catch (error) { 
//         console.error("error delete" + error.message) 
//     }
// });

sequelize.sync()
    .then(app.listen(5000, console.log('server is running at port 5000')))
    .catch(error => { console.log(error) })