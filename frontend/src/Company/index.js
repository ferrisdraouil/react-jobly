import React, { Component } from 'react';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Company">
        <div className="card shadow-sm mb-3">
          <div className="card-body">
            <h5 className="card-title">{this.props.detail.name}</h5>
            <p className="card-text">{this.props.detail.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Company;
