import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.search(this.state.search);
    this.setState({ search: '' });
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              name="search"
              className="form-control"
              onChange={this.handleChange}
              placeholder="Enter search term"
              aria-label="Enter search term"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-info" type="submit" id="button-addon2">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
