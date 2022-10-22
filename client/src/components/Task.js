import React, { Fragment, useState } from "react";
import moment from 'moment';

const Task = () => {
    const [taskDesc, setTaskDesc] = useState("");
    const [startdate, setStartDate] = useState("");
    const [enddate, setEndDate] = useState("");
    const onSubmitForm = async (event) => {
        event.preventDefault();
        try {
            const body = {
                taskDesc,
                startdate,
                enddate
            };
            const response = await fetch("http://localhost:5000/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            window.location = "/";
            console.log(response)
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>

                    <h1 className="text-center mt-5">RNEP Todo App</h1>
                    <table className="table mt-5 text-center">
                        
                        <tbody>
                        <tr>
                            <td>
        <form className="form-group " onSubmit={onSubmitForm}>
        <input disabled type="hidden" name="_csrf" value="_csrf"></input>
        <label  className="form-label">Task</label>
                <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    value={taskDesc}
                    onChange={event => setTaskDesc(event.target.value)} />
                    <label htmlFor="startDate" className="form-label">Start date</label>
                    <input
                    type="datetime-local"
                    className="form-control"
                    name=""
                    id=""
                    value={startdate}
                    onChange={event => setStartDate(event.target.value)} />
                    <label htmlFor="endDate" className="form-label">End date</label>
                    <input
                    type="datetime-local"
                    className="form-control"
                    name=""
                    id=""
                    value={enddate}
                    onChange={event => setEndDate(event.target.value)} />
                <button type="submit" className="btn btn-success mt-3">Add</button>
            </form>
                            </td>
                        </tr>
                        </tbody>
   
                    </table>


        </Fragment>
    );
};

export default Task;