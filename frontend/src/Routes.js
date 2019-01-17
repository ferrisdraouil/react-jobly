import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CompanyList from './CompanyList';
import JobList from './JobList';
import Login from './Login';
import Profile from './Profile';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Homepage</h1>} />
        <Route
          exact
          path="/companies/:company"
          render={() => <h1>Company</h1>}
        />
        <Route
          exact
          path="/companies"
          render={routeProps => (
            <CompanyList {...routeProps} loggedIn={this.props.loggedIn} />
          )}
        />
        <Route
          exact
          path="/jobs"
          render={routeProps => (
            <JobList {...routeProps} loggedIn={this.props.loggedIn} />
          )}
        />
        <Route
          exact
          path="/login"
          render={routeProps => (
            <Login {...routeProps} login={this.props.login} />
          )}
        />
        <Route
          exact
          path="/profile"
          render={routeProps => (
            <Profile
              {...routeProps}
              currentUser={this.props.currentUser}
              loggedIn={this.props.loggedIn}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
