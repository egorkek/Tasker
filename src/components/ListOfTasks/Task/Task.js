import React from 'react'
import classes from './Task.css'
import Button from '../../UI/Button/Button'
import {connect} from 'react-redux'
import {deleteTask} from '../../../store/actions/deleteTask'
const Task = (props)=>{
    console.log(props);
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
                    <Button type={'red'} onClick={()=>props.deleteTask(index)} >Закончить таск</Button>

                </li>
            )

        })}
        </div>
    )


};


function mapStateToProps(state) {
    return{
        state: state
    }

}


function mapDispatchToProps(dispatch){
    return{
        deleteTask: (index)=>dispatch(deleteTask(index))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Task)