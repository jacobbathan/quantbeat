import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { Grid, Typography } from '@material-ui/core';
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

  // Look behind function that will add commas to seperate divisions of thousands via Regex
  numberWithCommas(x) {
    // Async edge case so page will not break in case of large data loads
    if (!x) {
      return 'Loading...';
    }

    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }

  render() {
    const { company, ticker } = this.state;

    return (
      <div>
        <Grid container>
          <Grid item xs={4}>
            <div className="searchbar">
              <FormInput
                type="text"
                name="ticker"
                value={ticker}
                onChange={this.handleChange}
                label="Ticker (i.e. MSFT)"
              />
            </div>
          </Grid>
          <Grid item xs={4} className="searchButton">
            <CustomButton type="button" onClick={this.searchCompany}>
              SEARCH
            </CustomButton>
          </Grid>
        </Grid>
        {Object.keys(company).length === 0 ? (
          <Typography variant="h6" className="noData">
            Please search for a valid company without the ticker symbol ($).
          </Typography>
        ) : (
          <div className="companyContent">
            <div className="dataSheet">DATA SHEET FOR ${company.ticker}</div>
            <div className="img">
              {!company.logo ? (
                <div className="noImg">Image not found</div>
              ) : (
                <img src={company.logo} alt="Company logo" />
              )}
            </div>
            <div className="companyName">{company.name}</div>
            <div className="companyAddress">
              {company.address}, {company.city}, {company.state}{' '}
              {company.country}
            </div>
            <a href={company.weburl} className="companyWeb">
              {company.weburl}
            </a>
            <div className="companyDesc">{company.description}</div>
            <div className="companyInd">
              Industry: {company.finnhubIndustry}
            </div>
            <div className="companyEmployees">
              Total Employees: {this.numberWithCommas(company.employeeTotal)}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CompanyView;
