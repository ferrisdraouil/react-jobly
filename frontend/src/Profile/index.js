import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      first_name: this.props.currentUser.first_name,
      last_name: this.props.currentUser.last_name,
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    let user = await JoblyApi.patchUser(this.state.username, this.state);
    if (user) {
      this.setState(
        {
          username: user.username,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          password: ''
        },
        () => this.props.updateCurrentUser(user)
      );
    }
  }

  render() {
    return (
      <div className="row my-5">
        <div className="col-12 col-lg-4 offset-lg-4">
          <div className="card">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    defaultValue={this.state.username}
                    readOnly
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
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    className="form-control"
                    value={this.state.first_name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    className="form-control"
                    value={this.state.last_name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Re-enter password to update</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-info btn-block">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
