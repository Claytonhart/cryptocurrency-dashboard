import React, { Component } from "react";
import axios from "axios";

import TransactionChart from "./TransactionChart";
import TransactionList from "./TransactionList";

class TransactionHistory extends Component {
  state = {};
  async componentDidMount() {
    this.getTransactionData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.symbol !== this.props.symbol) {
      this.getTransactionData(this.props.symbol.toUpperCase());
    }
  }

  getTransactionData = async () => {
    const url = `https://min-api.cryptocompare.com/data/histohour?fsym=${this.props.symbol.toUpperCase()}&tsym=USD&limit=5`;
    const response = await axios.get(url);
    const { Data } = response.data;
    const transactionList = Data.map(transaction => {
      return transaction.close;
    });
    this.setState({ transactionList });
  };

  render() {
    return (
      <section className="transaction-history">
        <TransactionChart />
        <TransactionList
          transactionList={this.state.transactionList}
          symbol={this.props.symbol}
        />
      </section>
    );
  }
}

TransactionHistory.defaultProps = {
  symbol: "BTC"
};

export default TransactionHistory;
