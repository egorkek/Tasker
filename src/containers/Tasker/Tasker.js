import React, {Fragment} from 'react'
import classes from './Tasker.css'
import MyForm from "../../components/FormOftasks/MyForm";
import ListOfTasks from '../../components/ListOfTasks/ListOfTasks'
import {connect} from 'react-redux'
import Loader from "../../components/UI/Loader/Loader";
import {getTasks} from '../../store/actions/getTasks'

class Tasker extends React.Component{





    render(){




        return(
            <Fragment>
                {this.props.state.loading ? <Loader/> :
                    <div className={classes.Tasker}>


                            <MyForm
                                name={this.props.state.keyForBD}
                            />
                         <ListOfTasks
                             tasks={this.props.state.tasks}
                         />

                    </div>
                    }

            </Fragment>
        )

    }


};

function mapStateToProps (state){
    return{
        state: state.auth
    }

}
function mapDispatchToProps(dispatch) {
    return {
        getTasks: ()=>dispatch(getTasks())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Tasker)