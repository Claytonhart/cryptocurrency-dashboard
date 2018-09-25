import React, { Component } from "react";
import { LineGraph } from "./svg/Svg";

class TransactionList extends Component {
  render() {
    return (
      <section className="transaction-list">
        <ul className="transaction-list__container">
          <li className="transaction-list__item">
            <LineGraph className="transaction-list__icon" />
            <div className="transaction-list__desc">
              $1200 = 0.084 btc
              <span>1 BTC = $6542.35</span>
            </div>
          </li>
          <li className="transaction-list__item">
            <LineGraph className="transaction-list__icon transaction-list__icon--down" />
            <div className="transaction-list__desc">
              $1200 = 0.084 btc
              <span>1 BTC = $6542.35</span>
            </div>
          </li>
          <li className="transaction-list__item">
            <LineGraph className="transaction-list__icon transaction-list__icon--down" />
            <div className="transaction-list__desc">
              $1200 = 0.084 btc
              <span>1 BTC = $6542.35</span>
            </div>
          </li>
          <li className="transaction-list__item">
            <LineGraph className="transaction-list__icon" />
            <div className="transaction-list__desc">
              $1200 = 0.084 btc
              <span>1 BTC = $6542.35</span>
            </div>
          </li>
          <li className="transaction-list__item">
            <LineGraph className="transaction-list__icon" />
            <div className="transaction-list__desc">
              $1200 = 0.084 btc
              <span>1 BTC = $6542.35</span>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default TransactionList;
