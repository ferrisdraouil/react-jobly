import React, { Component } from 'react';
import JoblyApi from '../JoblyApi';
import Company from '../Company';
import Search from '../Search';

class CompanyList extends Component {
  constructor(props) {
    super(props);

    if (!this.props.loggedIn) {
      this.props.history.replace('/login');
    }

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
      <React.Fragment>
        <Search search={this.handleSearch} />
        <div className="CompanyList">
          {this.state.companies.map(company => (
            <Company detail={company} key={company.handle} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default CompanyList;
