import React, { Component } from "react";
import CryptoChart from "./CryptoChart";
import RecentTransactions from "./RecentTransactions";
import WalletsItem from "./WalletsItem";

class Wallets extends Component {
  state = {
    active: "Bitcoin"
  };

  setActiveWallet = name => {
    this.setState({ active: name });
  };

  render() {
    const coins = [
      ["Bitcoin", "BTC"],
      ["Litecoin", "LTC"],
      ["Ethereum", "ETH"],
      ["Bitcoin cash", "BCH"]
    ];

    const walletsitems = coins.map(coin => {
      const coinName = coin[0];
      const coinSymbol = coin[1];
      return (
        <WalletsItem
          coinName={coinName}
          coinSymbol={coinSymbol}
          key={coin[0]}
          className={
            this.props.coinName === coinName
              ? "coin-list__item coin-list__item--active"
              : "coin-list__item"
          }
          setCoin={this.props.setCoin}
        />
      );
    });

    return (
      <section className="wallets">
        <div className="wallets__info">
          <h1 className="wallets__header">WALLET</h1>
          <ul className="coin-list">
            <li className="coin-list__item-container">
              {walletsitems}
              {/* <div
                onClick={this.props.setCoin.bind(this, ["Bitcoin", "BTC"])}
                className="coin-list__item coin-list__item--active"
              >
                Bitcoin
              </div>
              <div
                onClick={this.props.setCoin.bind(this, ["Litecoin", "LTC"])}
                className={
                  this.props.coinName === "Litecoin"
                    ? "coin-list__item coin-list__item--active"
                    : "coin-list__item"
                }
              >
                Litecoin
              </div>
              <div
                onClick={this.props.setCoin.bind(this, ["Ethereum", "ETH"])}
                className="coin-list__item"
              >
                Ethereum
              </div>
              <div
                onClick={this.props.setCoin.bind(this, ["Bitcoin cash", "BCH"])}
                className="coin-list__item"
              >
                Bitcoin Cash
              </div> */}
            </li>
            <li className="coin-list__add">+ ADD CURRENCY</li>
          </ul>

          <div className="wallets-price-history">
            <div className="wallets-price-history__item">
              <p>Total Balance</p>
              <h3>$ 9,230</h3>
            </div>
            <div className="wallets-price-history__item">
              <p>Current Value</p>
              <h3>$ 4,230</h3>
            </div>
            <div className="wallets-price-history__item">
              <p>Since Last Month</p>
              <h3>+ 2,000</h3>
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
          <RecentTransactions coinName={this.props.coinName} />
        </div>
      </section>
    );
  }
}

export default Wallets;
