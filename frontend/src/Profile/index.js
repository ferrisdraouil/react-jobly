import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);

    if (!this.props.loggedIn) {
      this.props.history.push('/login');
    }

    this.state = {
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      firstName: this.props.currentUser.first_name,
      lastName: this.props.currentUser.last_name,
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    console.log('USER FROM PROFILE', this.props.currentUser);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="form-control-plaintext"
            defaultValue={this.state.username}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Profile;
