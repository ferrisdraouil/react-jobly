import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';
import Job from '../Job';
import Search from '../Search';
import './index.css';

class JobList extends Component {
  constructor(props) {
    super(props);

    this.state = { jobs: [], loading: false, search: '' };
    this.generateJobs = this.generateJobs.bind(this);
    this.getJobs = this.getJobs.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    if (!this.state.jobs.length) this.generateJobs();
  }

  async getJobs() {
    try {
      const encoded = encodeURIComponent(this.state.search);
      const jobs = await JoblyApi.getJobs(encoded);
      this.setState({ jobs });
    } catch (error) {
      console.log(error);
    }
  }

  generateJobs() {
    this.setState({ loading: true, jobs: [] }, this.getJobs);
  }

  handleSearch(term) {
    this.setState({ search: term }, this.getJobs);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row mb-4 py-4 px-md-4 align-items-center bg-light">
          <div className="col-12 col-md-6">
            <h1 className="mb-2 mb-md-0">Jobs</h1>
          </div>
          <div className="col-12 col-md-4">
            <Search search={this.handleSearch} />
          </div>
        </div>

        <div className="row px-md-4 my-3">
          <div className="col-12">
            <div className="JobList">
              {this.state.jobs.map(job => (
                <Job key={job.id} detail={job} username={this.props.username} />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default JobList;
