import React from 'react'
import classes from './ListOfTasks.css'
import Task from './Task/Task'

const ListOfTasks = (props)=>{
    return(
        <div className={classes.ListOfTasks}>
            <ul>
                <Task
                    task={props.tasks}



                />
            </ul>
        </div>

    )

};



export default (ListOfTasks)