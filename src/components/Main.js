import React, { Component } from "react";

import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Wallets from "./Wallets";

class Main extends Component {
  state = {
    coinName: "bitcoin",
    coinSymbol: "btc"
  };

  // componentDidUpdate(prevProps) {
  //   debugger;
  //   if (prevProps.active !== this.props.active) {
  //     debugger;
  //     console.log("updating!");
  //   }
  // }

  setCoin = coin => {
    this.setState({ coinName: coin[0], coinSymbol: coin[1] });
  };

  render() {
    return (
      <section className="main">
        <Navbar setCoin={this.setCoin} />
        {this.props.active === "Dashboard" && (
          <Dashboard
            coinName={this.state.coinName}
            coinSymbol={this.state.coinSymbol}
          />
        )}
        {this.props.active === "Wallets" && (
          <Wallets
            coinName={this.state.coinName}
            coinSymbol={this.state.coinSymbol}
          />
        )}
      </section>
    );
  }
}

export default Main;
