import React, {Fragment} from 'react'
import classes from './Tasker.css'
import MyForm from "../../components/FormOftasks/MyForm";
import ListOfTasks from '../../components/ListOfTasks/ListOfTasks'
import {connect} from 'react-redux'
import Loader from "../../components/UI/Loader/Loader";
import {getTasks} from "../../store/actions/getTasks";

class Tasker extends React.Component{
   componentDidMount(){
       this.props.getTasks()
   }




    render(){
       console.log('123',this.props.tasks.loading);


        return(
            <Fragment>
                {!this.props.tasks.loading ? <Loader/> :
                    <div className={classes.Tasker}>


                        <MyForm
                            name={this.props.auth.username}
                        />
                        {/*<ListOfTasks*/}
                            {/*tasks={this.props.tasks}*/}




                        {/*/>*/}
                    </div>
                }
            </Fragment>
        )

    }


};

function mapStateToProps (state){
    return{
        auth: state.auth,
        tasks: state.tasks
    }

}
function mapDispatchToProps(dispatch) {
    return {
        getTasks: ()=>dispatch(getTasks())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Tasker)