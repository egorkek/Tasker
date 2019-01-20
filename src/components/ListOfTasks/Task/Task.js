import React from 'react'
import classes from './Task.css'
import Button from '../../UI/Button/Button'
const Task = (props)=>{
    console.log(props)
    return(
        <div className={classes.Task}>
        {props.task.map((obj, index)=>{
            return(
                <li key={index}>
                    <div>
                    <h3>{obj.taskName}</h3>
                    <small>{obj.endDate}</small>
                    </div>
                    <p>{obj.description}</p>
                    <Button type={'red'}>Закончить таск</Button>

                </li>
            )

        })}
        </div>
    )


};

export default Task