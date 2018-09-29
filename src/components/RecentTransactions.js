import React, { Component } from "react";

import { LineGraph } from "./svg/Svg";

class RecentTransactions extends Component {
  render() {
    const transactionList = [
      {
        time: "Sep 1",
        method: LineGraph,
        transaction: ["Received", "From"],
        source: "Frank Zappa",
        amount: "4,800"
      },
      {
        time: "Aug 15",
        method: LineGraph,
        transaction: ["Bought", "Using"],
        source: "Don Zappa",
        amount: "3,120"
      },
      {
        time: "Dec 21",
        method: LineGraph,
        transaction: ["Received", "From"],
        source: "Joe Zappa",
        amount: "704"
      },
      {
        time: "Sep 1",
        method: LineGraph,
        transaction: ["Sent", "To"],
        source: "Phil Zappa",
        amount: "963"
      },
      {
        time: "Sep 1",
        method: LineGraph,
        transaction: ["Received", "From"],
        source: "Frank Zappa",
        amount: "4,800"
      },
      {
        time: "Aug 15",
        method: LineGraph,
        transaction: ["Bought", "Using"],
        source: "Don Zappa",
        amount: "3,120"
      },
      {
        time: "Dec 21",
        method: LineGraph,
        transaction: ["Received", "From"],
        source: "Joe Zappa",
        amount: "704"
      },
      {
        time: "Jan 8",
        method: LineGraph,
        transaction: ["Sent", "To"],
        source: "Phil Zappa",
        amount: "963"
      }
    ];

    const recentTransactions = transactionList.map((trade, index) => {
      let { time, method, transaction, source, amount } = trade;
      return (
        <li className="recent-transaction-item" key={time + amount + index}>
          <div className="recent-transaction-left">
            <div className="recent-transaction-item__time">{time}</div>
            <div className="recent-transaction-item__icon">
              <LineGraph />
            </div>
            <div className="recent-transaction-item__name">
              <div className="recent-transaction-item__name--title">
                {transaction[0] + " Bitcoin"}
              </div>
              <div className="recent-transaction-item__name--desc">{`${
                transaction[1]
              } ${source}`}</div>
            </div>
          </div>

          <div className="recent-transaction-item__amount">{amount}</div>
        </li>
      );
    });

    return (
      <section className="recent-transactions">
        <h4 className="recent-transactions__header">Recent Transactions</h4>
        <ul className="recent-transactions-list">{recentTransactions}</ul>
      </section>
    );
  }
}

export default RecentTransactions;
