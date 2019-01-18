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
    console.log('JOBS', this.state.jobs);

    return (
      <React.Fragment>
        <div className="row mb-5 py-4 px-4 bg-light">
          <div className="col-12">
            <h1 class="m-0">Jobs</h1>
          </div>
        </div>

        <div className="row px-4 my-5">
          <div className="col-12">
            <Search search={this.handleSearch} />
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
