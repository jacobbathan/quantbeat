import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import * as companyServices from '../../services/companies.services';
import './companyView.styles.scss';

class CompanyView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: '',
      company: {},
      news: [],
      recommendation: {},
    };
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  searchCompany = () => {
    this.getCompanyData(this.state.ticker);
  };

  componentDidMount = () => {
    this.getCompanyNews(this.state.ticker);
    this.getCompanyData(this.state.ticker);
    this.getCompanyRec(this.state.ticker);
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

  getCompanyDataError = (error) => {
    console.log(error);
  };

  getCompanyNews = (ticker) => {
    companyServices
      .getCompanyNews(ticker)
      .then(this.getCompanyNewsSuccess)
      .catch(this.getCompanyNewsError);
  };

  getCompanyNewsSuccess = (res) => {
    console.log(res);
    // this.setState({ news: res });
  };

  getCompanyNewsError = (error) => {
    console.log(error);
  };

  getCompanyRec = (ticker) => {
    companyServices
      .getRecomendationTrend(ticker)
      .then(this.getCompanyRecSuccess)
      .catch(this.getCompanyRecError);
  };

  getCompanyRecSuccess = (res) => {
    console.log(res);
    this.setState({ recommendation: res[0] });
  };

  getCompanyRecError = (error) => {
    console.log(error);
  };

  render() {
    const { company, ticker } = this.state;

    return (
      <div>
        <div className="searchbar">
          <FormInput
            type="text"
            name="ticker"
            value={ticker}
            onChange={this.handleChange}
            label="Ticker (i.e. MSFT)"
          />
          <CustomButton type="button" onClick={this.searchCompany}>
            SEARCH
          </CustomButton>
        </div>
        {Object.keys(company).length === 0 ? (
          <div>
            Please search for a valid company without the ticker symbol ($).
          </div>
        ) : (
          <div>
            <div>Data sheet for ${company.ticker}</div>
            <div>
              {!company.logo ? (
                'Image not found'
              ) : (
                <img src={company.logo} alt="Company logo" />
              )}
            </div>
            <div>
              Address: {company.address}, {company.city}, {company.state}{' '}
              {company.country}
            </div>
            <div>Description: {company.description}</div>
            <div>Industry: {company.finnhubIndustry}</div>
            <div>Total Employees: {company.employeeTotal}</div>
          </div>
        )}
      </div>
    );
  }
}

export default CompanyView;
