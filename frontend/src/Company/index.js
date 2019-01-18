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
      <div className="card shadow-sm">
        <div className="card-body">
          <img
            src={`images/logos/${this.props.id + 1}.svg`}
            className="card-image mb-3"
            alt="corporate logo"
          />
          <h5 className="card-title mb-0">{this.props.detail.name}</h5>
          <p className="card-text text-muted">
            {this.props.detail.description}
          </p>
        </div>
      </div>
    );
  }
}

export default Company;
