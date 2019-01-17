import React, { Component } from 'react';
import Routes from './Routes';
import './App.css';
import Navbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: Boolean(window.localStorage.getItem('_token'))
    };
    this.changeLoggedIn = this.changeLoggedIn.bind(this);
  }

  changeLoggedIn() {
    this.setState(
      state => ({
        loggedIn: !state.loggedIn
      }),
      () => {
        if (!this.state.loggedIn) {
          window.localStorage.clear();
        }
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Navbar
          loggedIn={this.state.loggedIn}
          changeLoggedIn={this.changeLoggedIn}
        />
        <div className="Page my-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-lg-10 offset-lg-1">
                <Routes />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
