import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      username: 'testuser',
      password: 'secret',
      firstName: '',
      lastName: '',
      email: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleClick(evt) {
    this.setState(state => ({
      login: !state.login
    }));
  }

  async handleSubmit(evt) {
    evt.preventDefault();

    let token;
    if (this.state.login) {
      const { username, password } = this.state
      token = await JoblyApi.login(username, password);
    } else {
      const { login, ...data } = this.state;
      token = await JoblyApi.register(data);
    }

    // create token and save to localStorage
    if (token) {
      window.localStorage.setItem('_token', token);

      const user = await JoblyApi.getUser(this.state.username);

      this.props.login(user);

      this.setState(
        {
          username: '',
          password: '',
          email: '',
          firstName: '',
          lastName: ''
        },
        () => {
          this.props.history.push('/');
        }
      );
    }
  }

  render() {
    return (
      <div className="row my-5">
        <div className="col-12 col-lg-4 offset-lg-4">
          <div className="d-flex justify-content-end mb-2">
            <div
              className="btn-group"
              role="group"
              aria-label="Login or Sign Up"
            >
              <button
                type="button"
                className={`btn btn-info ${this.state.login ? 'active' : ''}`}
                onClick={this.handleClick}
              >
                Login
              </button>
              <button
                type="button"
                className={`btn btn-info ${!this.state.login ? 'active' : ''}`}
                onClick={this.handleClick}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={this.state.username}
                    onChange={this.handleChange}
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
                {this.state.login || (
                  <React.Fragment>
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
                  </React.Fragment>
                )}
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-info">
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

export default Login;
