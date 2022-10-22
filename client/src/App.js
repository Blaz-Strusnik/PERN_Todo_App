import React, { Fragment } from "react";
import './App.css';
// components
import Task from "./components/Task";
import GetTask from "./components/GetTask";


function App() {
    return (
        <Fragment>
		<div  className="container">
			<div  className="row justify-content-center">
            <div className="table-responsive-sm">
            <Task />
                <GetTask />
            </div>

            </div>

</div>


        </Fragment>
    );
}

export default App;
