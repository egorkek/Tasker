import React from 'react'
import classes from './MyForm.css'
import Button from '../UI/Button/Button'
import {connect} from 'react-redux'
import {addTask} from "../../store/actions/addTask";
import {logout} from "../../store/actions/auth";

class MyForm extends React.Component {
    state={
        taskName: '',
        description: '',
        endDate: ''
    };
    onChangeInput = (e, option)=>{

        const state = this.state;
        state[option] = e.target.value;
        this.setState({
            state
        })

    };
    onAddTaskHandler=()=>{
        this.props.addTask(this.state.taskName, this.state.description, this.state.endDate)
        this.setState({
            taskName: '',
            description: '',
            endDate: ''

        })

    }


    render() {

        return (
            <div className={classes.MyForm}>
                <h1>
                    username: {this.props.name}
                </h1>

                <label>Task Name: </label>
                <input type="text" value={this.state.taskName} onChange={(e)=>this.onChangeInput(e, 'taskName')} />

                <label>End Date: </label>
                <input type="text" value={this.state.endDate} onChange={(e)=>this.onChangeInput(e, 'endDate')}/>

                <label>Description: </label>
                <input type="text" value={this.state.description} onChange={(e)=>this.onChangeInput(e, 'description')} />
                <Button  type={'green'} onClick={()=>this.onAddTaskHandler()} >Add Task</Button>
                <Button type={'red'} onClick={()=>this.props.logout()} >Выйти</Button>
            </div>
        )
    }


};

function mapStateToProps(state) {
    return{
        tasks: state
    }

}
function mapDispatchToProps(dispatch) {
    return{
        addTask: (taskName, description, endDate)=>dispatch(addTask(taskName, description, endDate)),
        logout: ()=>dispatch(logout())

    }

}

export default connect(mapStateToProps, mapDispatchToProps )(MyForm);