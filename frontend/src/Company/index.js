import React, { Component } from 'react';
import './index.css';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // Build on click method that renders company and its jobs
  render() {
    return (
      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <div className="media">
            <img
              src={`images/logos/${this.props.id + 1}.svg`}
              className="mr-3 align-self-center"
              width="45"
              alt="corporate logo"
            />
            <div className="media-body">
              <h5 className="card-title mb-1">{this.props.detail.name}</h5>
              <p className="card-text">{this.props.detail.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Company;
