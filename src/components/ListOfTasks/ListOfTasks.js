import React from 'react'
import classes from './ListOfTasks.css'
import Task from './Task/Task'

const ListOfTasks = (props)=>{
    console.log(props.tasks)
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