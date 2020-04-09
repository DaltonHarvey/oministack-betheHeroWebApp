import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from './pages/Logon/index';
import Register from './pages/Register';
import Profile from './pages/profile';
import NewIncidente from './pages/newIncidents';

class Routes extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Logon} />
          <Route path="/register" exact component={Register} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/incidente/new" exact component={NewIncidente} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;