import React from 'react';
import * as companyServices from '../../services/companies.services';

class CompanyView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: 'TSLA',
      company: {},
    };
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  searchCompany = () => {
    this.getCompanyData(this.state.ticker)
  }

  componentDidMount = () => {
    this.getCompanyData(this.state.ticker);
  };

  getCompanyData = (ticker) => {
    companyServices
      .getCompanyInfo(ticker)
      .then(this.getCompanyDataSuccess)
      .catch(this.getCompanyDataError);
  };

  getCompanyDataSuccess = (res) => {
    console.log(res);
    this.setState({ company: res });
  };

  render() {
    const { company } = this.state;

    return (
      <div>
        <div>
          <input type="text" name="ticker" value={this.state.ticker} onChange={this.handleChange} />
          <button type="button" onClick={this.searchCompany}>Search</button>
        </div>
    <div>Data sheet for {company.ticker}</div>
        <div>
          Address: {company.address}, {company.city}
        </div>
        <div>Description: {company.description}</div>
        <div>Industry: {company.finnhubIndustry}</div>
        <div>Total Employees: {company.employeeTotal}</div>
      </div>
    );
  }
}

export default CompanyView;
