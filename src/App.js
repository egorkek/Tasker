import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import Tasker from './containers/Tasker/Tasker'
import Landing from './containers/Landing/Landing'
import {Switch, Route} from 'react-router-dom'


class App extends Component {
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

export default App;
