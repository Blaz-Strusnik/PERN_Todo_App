import React, { Fragment, useEffect, useState } from "react";
import UpdateTask from "./UpdateTask";
import moment from 'moment';

const GetTask = () => {
    const [tasks, setTasks] = useState([]);
    //delete task 
    const deleteTask = async id => {
        try {
            const deleteTask = await fetch(`http://localhost:5000/tasks/${id}`, {
                method: "DELETE"
            })
            setTasks(tasks.filter(task => task.id !== id));
        } catch (err) {
            console.error(err.message)
        }
    }

    const getTasks = async () => {
        try {
            const response = await fetch("http://localhost:5000/tasks");
            const jsonData = await response.json();
            setTasks(jsonData.tasks);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTasks();
        
    }, []);
    return <Fragment>
        <table className="table mt-5 text-center" >
            <thead >
                <tr>
                    <th scope="col">Task</th>
                    <th scope="col" >Start date</th>
                    <th scope="col">End date</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(task => (
                    <tr key={task.id}>
                        <td>{task.taskDesc}</td>
                        <td>{moment(task.startdate).format('D.M.YYYY H:mm')}</td>
                        <td>{moment(task.enddate).format('D.M.YYYY H:mm')}</td>
                        <td><UpdateTask task={task} /></td>
                        <td><button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>;
};

export default GetTask;