import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import Tasker from './containers/Tasker/Tasker'
import Landing from './containers/Landing/Landing'
import {Switch, Route} from 'react-router-dom'
import {connect} from "react-redux";
import {autoLogin} from './store/actions/auth'


class App extends Component {

    componentDidMount(){
        this.props.autoLogin()

    }
  render() {
    return (
        <Layout>
            <Switch>
                <Route path={'/main'} component={Tasker}/>

                <Route path={'/'} exact component={Landing}/>
            </Switch>
        </Layout>

    );
  }
}

function mapStateToProps(state) {
    return{
        isAutenticated: !!state.auth.token
    }

}
function mapDispatchToProps(dispatch) {
    return{
        autoLogin: ()=>dispatch(autoLogin())
    }

}

export default  connect(mapStateToProps, mapDispatchToProps)(App);
