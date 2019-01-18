import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-info px-5 shadow-sm border-bottom">
          <NavLink
            exact
            className="navbar-brand mr-3"
            activeClassName="active"
            to="/"
          >
            Jobly
          </NavLink>
          <div className="navbar-nav">
            <NavLink
              exact
              className="Navlink nav-item nav-link"
              to="/companies"
            >
              Companies
            </NavLink>
            <NavLink exact className="Navlink nav-item nav-link" to="/jobs">
              Jobs
            </NavLink>
            <NavLink exact className="Navlink nav-item nav-link" to="/profile">
              Profile
            </NavLink>
          </div>
          <div className="navbar-nav ml-auto">
            {this.props.loggedIn ? (
              <NavLink
                exact
                className="Navlink nav-item nav-link"
                to="/"
                onClick={this.handleLogout}
              >
                Logout
              </NavLink>
            ) : (
              <NavLink exact className="Navlink nav-item nav-link" to="/login">
                Login
              </NavLink>
            )}
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
