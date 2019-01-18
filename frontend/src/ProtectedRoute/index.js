import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

class ProtectedRoute extends Component {
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    } else {
      return <Route {...this.props} />;
    }
  }
}

export default ProtectedRoute;
