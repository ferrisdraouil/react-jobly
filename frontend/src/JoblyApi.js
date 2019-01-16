import axios from 'axios';

class JoblyApi {
  static async request(endpoint, params = {}, verb = 'get') {
    console.debug('API Call:', endpoint, params, verb);

    params._token = // for now, hardcode token for "testuser"
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6' +
      'InRlc3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1NDE1N' +
      'jQ2Nzl9.LYDHSkl81gEm7jfHv9wJhzD4ndpuBkSzBan8Nirb6UY';

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        params
      })).data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompanies(searchTerm) {
    let res = await this.request(
      `companies/${searchTerm ? `?search=${searchTerm}` : ''}`
    );
    return res.companies;
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getJobs(searchTerm) {
    let res = await this.request(
      `jobs/${searchTerm ? `?search=${searchTerm}` : ''}`
    );
    return res.jobs;
  }

  static async getJob(id) {
    let res = await this.request(`job/${id}`);
    return res.job;
  }
}

export default JoblyApi;
