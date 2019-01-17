import React, { Component } from 'react';
import Routes from './Routes';
import './App.css';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
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
