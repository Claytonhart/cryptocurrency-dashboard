import React, { Component } from "react";
import { LineGraph } from "./svg/Svg";

class TransactionList extends Component {
  state = {
    transactionList: []
  };
  componentDidUpdate(prevProps) {
    debugger;
    if (prevProps.transactionList !== this.props.transactionList) {
      this.generateTransactionList();
    }
  }

  generateTransactionList = () => {
    let transactionList = [];
    for (let i = 1; i < this.props.transactionList.length; i++) {
      let price = this.props.transactionList[i];
      transactionList.push(
        <li className="transaction-list__item" key={`${i}:${price}`}>
          {price > this.props.transactionList[i - 1] ? (
            <LineGraph className="transaction-list__icon" />
          ) : (
            <LineGraph className="transaction-list__icon transaction-list__icon--down" />
          )}
          <p className="transaction-list__desc">{`1 ${this.props.symbol.toUpperCase()} = $${price}`}</p>
        </li>
      );
    }
    this.setState({ transactionList });
  };

  render() {
    return (
      <section className="transaction-list">
        <ul className="transaction-list__container">
          {this.state.transactionList}
        </ul>
      </section>
    );
  }
}

export default TransactionList;
