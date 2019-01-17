import React, { Component } from 'react';

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('hello');
    return (
      <div className="Job">
        <div className="card shadow-sm mb-3">
          <div className="card-body">
            <h5 className="card-title">{this.props.detail.title}</h5>
            <p className="card-text m-0">Salary: {this.props.detail.salary}</p>
            <p className="card-text m-0">
              Equity: {this.props.detail.equity || 0}
            </p>
          </div>
          <div className="card-footer d-flex justify-content-end bg-transparent">
            <button className="btn btn-primary">Apply</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Job;
