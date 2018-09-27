import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import CryptoChart from "./CryptoChart";
import WalletList from "./WalletList";
import TransactionHistory from "./TransactionHistory";

class Main extends Component {
  state = {};

  setCoin = coin => {
    this.setState({ coinName: coin[0], coinSymbol: coin[1] });
  };

  render() {
    return (
      <main className="container">
        <Sidebar />
        <section className="main">
          <Navbar setCoin={this.setCoin} />
          <div className="main-content">
            <div className="main-column">
              <CryptoChart
                coinName={this.state.coinName}
                coinSymbol={this.state.coinSymbol}
              />
              <WalletList />
            </div>
            <div className="side-column">
              <TransactionHistory />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
