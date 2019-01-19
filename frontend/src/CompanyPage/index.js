import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';
import Job from '../Job';

class CompanyPage extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [], name: '' };
    this.generateJobs = this.generateJobs.bind(this);
  }

  async componentDidMount() {
    this.generateJobs();
  }

  async generateJobs() {
    const company = await JoblyApi.getCompany(this.props.match.params.company);
    const jobs = company.jobs;
    const name = company.name;
    this.setState({ jobs, name });
  }

  render() {
    return (
      <React.Fragment>
        <div className="row mb-5 py-4 px-4 bg-light">
          <div className="col-12">
            <h1 className="m-0 text-capitalize">{this.state.name}</h1>
          </div>
        </div>

        <div className="row px-4 my-5">
          <div className="col-12">
            <div className="JobList">
              {this.state.jobs.map(job => (
                <Job
                  key={job.id}
                  detail={job}
                  updateCurrentUser={this.props.updateCurrentUser}
                  applied={
                    this.props.currentUser.jobs.some(elem => {
                      return job.id === elem.id;
                    })
                      ? 'applied'
                      : null
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CompanyPage;
