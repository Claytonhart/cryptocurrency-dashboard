import React, { Component } from "react";
import CryptoChart from "./CryptoChart";
import WalletList from "./WalletList";
import TransactionHistory from "./TransactionHistory";

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <section className="dashboard">
        <div className="main-content">
          <div className="main-column">
            <CryptoChart
              coinName={this.props.coinName}
              coinSymbol={this.props.coinSymbol}
            />
            <WalletList />
          </div>
          <div className="side-column">
            <TransactionHistory symbol={this.props.coinSymbol} />
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard;
