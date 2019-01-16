import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CompanyList from './CompanyList';
import JobList from './JobList';

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
        <Route exact path="/companies" render={() => <CompanyList />} />
        <Route exact path="/jobs" render={() => <JobList />} />
        <Route exact path="/login" render={() => <h1>Login</h1>} />
        <Route exact path="/profile" render={() => <h1>Profile</h1>} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
