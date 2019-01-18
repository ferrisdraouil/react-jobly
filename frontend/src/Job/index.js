import React, { Component } from 'react';
import './index.css';
import JoblyApi from '../JoblyApi';

class Job extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    if (!this.props.state) {
      console.log('JOB PROPS', this.props.detail.id, this.props.username);
      await JoblyApi.applyToJob(this.props.detail.id, this.props.username);
    }
  }

  render() {
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
            <button
              className="btn btn-primary text-capitalize"
              onClick={this.handleClick}
            >
              {this.props.detail.state || 'Apply'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Job;
