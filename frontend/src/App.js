import React, { Component } from 'react';
import Routes from './Routes';
import './App.css';
import Navbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      currentUser: ''
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.setState({
      loggedIn: Boolean(window.localStorage.getItem('_token'))
    });
  }

  logout() {
    this.setState({ loggedIn: false, currentUser: '' }, () =>
      window.localStorage.removeItem('_token')
    );
  }

  login(user) {
    console.log('USER FROM APP', user);
    this.setState({ loggedIn: true, currentUser: user });
  }

  render() {
    return (
      <div className="App">
        <Navbar loggedIn={this.state.loggedIn} logout={this.logout} />
        <div className="Page my-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-lg-10 offset-lg-1">
                <Routes
                  loggedIn={this.state.loggedIn}
                  login={this.login}
                  currentUser={this.state.currentUser}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
