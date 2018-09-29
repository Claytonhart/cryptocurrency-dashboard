import React, { Component } from "react";
import CryptoChart from "./CryptoChart";
import RecentTransactions from "./RecentTransactions";

class Wallets extends Component {
  render() {
    return (
      <section className="wallets">
        <div className="wallets__info">
          <h1 className="wallets__header">WALLET</h1>
          <ul className="coin-list">
            <li className="coin-list__item-container">
              <div className="coin-list__item coin-list__item--active">
                Bitcoin
              </div>
              <div className="coin-list__item">Litecoin</div>
              <div className="coin-list__item">Ethereum</div>
              <div className="coin-list__item">Bitcoin Cash</div>
            </li>
            <li className="coin-list__add">+ ADD CURRENCY</li>
          </ul>

          <div className="wallets-price-history">
            <div className="wallets-price-history__item">
              <p>Total Balance</p>
              <h3>$ 9,200</h3>
            </div>
            <div className="wallets-price-history__item">
              <p>Current Value</p>
              <h3>$ 4,230</h3>
            </div>
            <div className="wallets-price-history__item">
              <p>Since Last Month</p>
              <h3>+ 5,000</h3>
            </div>
          </div>
        </div>

        <div className="wallets__scroll-under">
          <div className="wallets-chart">
            <CryptoChart
              coinName={this.props.coinName}
              coinSymbol={this.props.coinSymbol}
            />
          </div>
          <RecentTransactions />
        </div>
      </section>
    );
  }
}

export default Wallets;
