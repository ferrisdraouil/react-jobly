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
        <div className="row mb-5 py-4 px-4 bg-light">
          <div className="col-12">
            <h1 className="m-0">Companies</h1>
          </div>
        </div>

        <div className="row px-4">
          <div className="col-12">
            <Search search={this.handleSearch} />
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
