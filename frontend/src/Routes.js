import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Company from './Company';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Homepage</h1>} />
        <Route
          exact
          path="/companies/:company"
          render={() => <h1>Company</h1>}
        />
        <Route exact path="/companies" render={() => <h1>Companies</h1>} />
        <Route exact path="/jobs" render={() => <h1>Jobs</h1>} />
        <Route exact path="/login" render={() => <h1>Login</h1>} />
        <Route exact path="/profile" render={() => <h1>Profile</h1>} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
