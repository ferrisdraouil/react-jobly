import React, { Component } from 'react';
import Routes from './Routes';
import './App.css';
import Navbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
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
    this.setState({ loggedIn: false }, () =>
      window.localStorage.removeItem('_token')
    );
  }

  login() {
    this.setState({ loggedIn: true });
  }

  render() {
    return (
      <div className="App">
        <Navbar loggedIn={this.state.loggedIn} logout={this.logout} />
        <div className="Page my-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-lg-10 offset-lg-1">
                <Routes loggedIn={this.state.loggedIn} login={this.login} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
