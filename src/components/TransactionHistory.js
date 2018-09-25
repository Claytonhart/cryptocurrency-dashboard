import React, { Component } from "react";
import TransactionChart from "./TransactionChart";
import TransactionList from "./TransactionList";

class TransactionHistory extends Component {
  render() {
    return (
      <section className="transaction-history">
        <TransactionChart />
        <TransactionList />
      </section>
    );
  }
}

export default TransactionHistory;
