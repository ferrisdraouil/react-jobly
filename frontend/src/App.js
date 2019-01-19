import React, { Component } from 'react';
import Routes from './Routes';
import './App.css';
import Navbar from './Navbar';
import JoblyApi from './JoblyApi';
import decode from 'jwt-decode';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      currentUser: ''
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  async componentDidMount() {
    let user;
    if (window.localStorage.getItem('_token')) {
      let token = window.localStorage.getItem('_token');
      let decoded = decode(token);

      user = await JoblyApi.getUser(decoded.username);
    }

    this.setState({
      loggedIn: Boolean(window.localStorage.getItem('_token')),
      currentUser: user || ''
    });
  }

  logout() {
    this.setState({ loggedIn: false, currentUser: '' }, () =>
      window.localStorage.removeItem('_token')
    );
  }

  login(user) {
    this.setState({ loggedIn: true, currentUser: user });
  }

  async updateCurrentUser(user) {
    let newUser = await JoblyApi.getUser(this.state.currentUser.username);

    this.setState({
      currentUser: newUser
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar
          loggedIn={this.state.loggedIn}
          logout={this.logout}
          currentUser={this.state.currentUser}
        />
        <main className="Main container-fluid">
          <Routes
            loggedIn={this.state.loggedIn}
            login={this.login}
            currentUser={this.state.currentUser}
            updateCurrentUser={this.updateCurrentUser}
          />
        </main>
      </div>
    );
  }
}

export default App;
