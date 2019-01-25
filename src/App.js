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
        console.log(this.props.isAutenticated)
        let pages = '';
        if (!this.props.isAutenticated)
            pages = (
                <Switch>

                    <Route path={'/'} component={Landing}/>
                </Switch>

            );
        else
            pages = (
                <Switch>
                    <Route path={'/'}  component={Tasker}/>
                </Switch>
            )




        return (
            <Layout>
                {pages}
            </Layout>

        );
    }
}

function mapStateToProps(state) {
    return{
        isAutenticated: state.auth.isLogin
    }

}
function mapDispatchToProps(dispatch) {
    return{
        autoLogin: ()=>dispatch(autoLogin())
    }

}

export default  connect(mapStateToProps, mapDispatchToProps)(App);
