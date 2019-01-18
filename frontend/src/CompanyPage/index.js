import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';
import Job from '../Job';

class CompanyPage extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [], name: '' };
  }

  async componentDidMount() {
    const company = await JoblyApi.getCompany(this.props.match.params.company);
    const jobs = company.jobs;
    const name = company.name;
    // const name = company.han;
    this.setState({ jobs, name });
  }

  render() {
    return (
      <div className="CompanyPage">
        <h1 className="text-capitalize">{this.state.name}</h1>
        {this.state.jobs.map(job => (
          <Job detail={job} />
        ))}
      </div>
    );
  }
}

export default CompanyPage;
