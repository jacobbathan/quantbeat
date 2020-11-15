import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import * as IPOServices from '../../services/ipo.services';
import './ipo.styles.scss';

class IPO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ipo: [],
    };
  }

  componentDidMount() {
    this.getIPO();
  }

  getIPO = () => {
    IPOServices.getUpcomingIPO()
      .then(this.getIPOSuccess)
      .catch(this.getIPOError);
  };

  getIPOSuccess = (res) => {
    this.setState({ ipo: res.ipoCalendar });
  };

  getIPOError = (error) => {
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
    return (
      <div className="container">
        <div className="title">
          Upcoming IPO (Initial Public Offering) in the next 12 months
        </div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Exchange</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Number of Shares</TableCell>
                <TableCell>Expected price (in USD)</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Total Shares Value (in USD)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.ipo.map((ipo, idx) => (
                <TableRow>
                  <TableCell>{ipo.date}</TableCell>
                  <TableCell>{ipo.exchange}</TableCell>
                  <TableCell>
                    {ipo.name} - ${ipo.symbol}
                  </TableCell>
                  <TableCell>
                    {this.numberWithCommas(ipo.numberOfShares)}
                  </TableCell>
                  <TableCell>${ipo.price}</TableCell>
                  <TableCell>{ipo.status.toUpperCase()}</TableCell>
                  <TableCell>
                    ${this.numberWithCommas(ipo.totalSharesValue)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default IPO;
