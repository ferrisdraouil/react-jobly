import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import JoblyApi from '../JoblyApi';
import Company from '../Company';
import Search from '../Search';
import './index.css';

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
      <React.Fragment>
        <div className="row mb-4 py-4 px-md-4 bg-light align-items-center">
          <div className="col-12 col-md-6 col-lg-8">
            <h1 className="mb-2 mb-md-0">Companies</h1>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Search search={this.handleSearch} />
          </div>
        </div>

        <div className="row px-md-4">
          <div className="col-12">
            <div className="CompanyList">
              {this.state.companies.map((company, i) => (
                <Link
                  key={i}
                  to={`companies/${company.handle}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Company key={company.handle} id={i} detail={company} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CompanyList;
