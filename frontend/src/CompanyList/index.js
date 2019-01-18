import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';
import Company from '../Company';
import Search from '../Search';

class CompanyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      loading: false,
      search: ''
    };

    this.getCompanies = this.getCompanies.bind(this);
    this.generateCompanies = this.generateCompanies.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    if (!this.state.companies.length) this.generateCompanies();
  }

  async getCompanies() {
    try {
      const encoded = encodeURIComponent(this.state.search);
      const companies = await JoblyApi.getCompanies(encoded);
      this.setState({ companies });
    } catch (error) {}
  }

  generateCompanies() {
    this.setState({ loading: true, companies: [] }, this.getCompanies);
  }

  handleSearch(term) {
    this.setState({ search: term }, this.getCompanies);
  }

  render() {
    return (
      <div className="row my-5">
        <div className="col-12 col-lg-10 offset-lg-1">
          <Search search={this.handleSearch} />
          <div className="CompanyList">
            {this.state.companies.map((company, i) => (
              <Company key={company.handle} id={i} detail={company} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyList;
