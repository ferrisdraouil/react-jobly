import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import CompanyList from './CompanyList';
import JobList from './JobList';
import Login from './Login';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/companies/:company"
          render={() => <h1>Company</h1>}
        />
        <ProtectedRoute
          exact
          path="/companies"
          loggedIn={this.props.loggedIn}
          render={routeProps => (
            <CompanyList {...routeProps} loggedIn={this.props.loggedIn} />
          )}
        />
        <ProtectedRoute
          exact
          path="/jobs"
          loggedIn={this.props.loggedIn}
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
        <ProtectedRoute
          exact
          path="/profile"
          loggedIn={this.props.loggedIn}
          render={routeProps => (
            <Profile
              {...routeProps}
              currentUser={this.props.currentUser}
              loggedIn={this.props.loggedIn}
              updateCurrentUser={this.props.updateCurrentUser}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
