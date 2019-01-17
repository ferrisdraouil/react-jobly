import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-sm border-bottom">
        <NavLink
          exact
          className="navbar-brand mr-auto"
          activeClassName="active"
          to="/"
        >
          Jobly
        </NavLink>
        <div className="navbar-nav">
          <NavLink exact className="Navlink nav-item nav-link" to="/companies">
            Companies
          </NavLink>
          <NavLink exact className="Navlink nav-item nav-link" to="/jobs">
            Jobs
          </NavLink>
          <NavLink exact className="Navlink nav-item nav-link" to="/profile">
            Profile
          </NavLink>
          {this.props.loggedIn ? (
            <NavLink
              exact
              className="Navlink nav-item nav-link"
              to="/"
              onClick={this.props.changeLoggedIn}
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              exact
              className="Navlink nav-item nav-link"
              to="/login"
              onClick={this.props.changeLoggedIn}
            >
              Login
            </NavLink>
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
