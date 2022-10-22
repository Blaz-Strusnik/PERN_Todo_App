import React, { Fragment, useState } from "react";
import moment from 'moment';
const UpdateTask = ({ task }) => {
    const [taskDesc, setTaskDesc] = useState(task.taskDesc)
    const [startdate, setStartDate] = useState(task.startdate);
    const [enddate, setEndDate] = useState(task.enddate);
    
    // edit Taskdesc
    const updateTaskDesc = async (event) => {
        event.preventDefault();
        try {
            const body = { taskDesc, startdate, enddate };
            const response = await fetch(`http://localhost:5000/tasks/${task.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            window.location = "/"
        } catch (err) {
            console.error(err.message)
        }
    }


    return <Fragment>
        <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${task.id}`}>
            Edit
        </button>
<form>
<input disabled type="hidden" name="_csrf" value="_csrf"></input>
        <div className="modal" id={`id${task.id}`} onClick={() => setTaskDesc(task.taskDesc)}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Update Task</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={() => setTaskDesc(task.taskDesc)}>&times;</button>
                    </div>
                    <div className="modal-body">
                    <label htmlFor="startDate" className="form-label">Start date</label>
                        <input className="form-control" type="datetime-local"
                            value={moment(startdate).format('YYYY-MM-DDTHH:MM')}
                            onChange={event => setStartDate(event.target.value)} />
                    </div>
                    <div className="modal-body">
                    <label htmlFor="endDate" className="form-label  ">End date</label>
                        <input className="form-control" type="datetime-local"
                            value={moment(enddate).format('YYYY-MM-DDTHH:MM')}
                            onChange={event => setEndDate(event.target.value)} />
                    </div>
                    <div className="modal-body">
                    <label htmlFor="taskDesc" className="form-label">Task</label>
                        <input className="form-control" type="text"
                            value={taskDesc}
                            onChange={event => setTaskDesc(event.target.value)} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={event => updateTaskDesc(event)}>Edit</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setTaskDesc(task.taskDesc)}>Close</button>
                    </div>
                </div>
            </div>
        </div>
        </form>
    </Fragment>
};

export default UpdateTask;