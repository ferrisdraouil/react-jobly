import React, { Component } from 'react';
import './index.css';
import JoblyApi from '../JoblyApi';

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = { applied: props.applied };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    if (!this.state.applied) {
      await JoblyApi.applyToJob(this.props.detail.id, this.props.username);
    }
    this.setState({ applied: 'applied' }, this.props.updateCurrentUser);
  }

  render() {
    return (
      <div className="Job">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{this.props.detail.title}</h5>
            <p className="card-text m-0">Salary: {this.props.detail.salary}</p>
            <p className="card-text m-0">
              Equity: {this.props.detail.equity || 0}
            </p>
          </div>
          <div className="card-footer border-0 d-flex justify-content-end bg-transparent">
            <button
              className="btn btn-info text-capitalize"
              onClick={this.handleClick}
            >
              {this.state.applied || 'Apply'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Job;
