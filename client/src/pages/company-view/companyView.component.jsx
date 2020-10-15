import React from 'react';
import * as companyServices from '../../services/companies.services';

class CompanyView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: 'SBUX',
      company: {},
    };
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
        <div>Data sheet for ${this.state.ticker}</div>
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
