import React from 'react'
import classes from './ListOfTasks.css'
import Task from './Task/Task'

const ListOfTasks = (props)=>{
    console.log(props.tasks)
    return(
        <div className={classes.ListOfTasks}>
            {props.tasks ?
                <ul>
                    <Task
                        task={props.tasks}


                    />
                </ul>
                : null
            }
        </div>

    )

};



export default (ListOfTasks)