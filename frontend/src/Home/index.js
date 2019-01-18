import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Jobly</h1>
        <p className="lead mb-1">All the jobs in one, convenient place.</p>
        {this.props.currentUser ? (
          <p className="Home-welcome-back h3 m-0">
            Welcome back, {this.props.currentUser.first_name}!
          </p>
        ) : (
          <Link to="/login" className="mt-2 btn btn-lg btn-info">
            Login
          </Link>
        )}
      </div>
    );
  }
}

export default Home;
