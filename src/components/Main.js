import React, { Component } from "react";

import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Wallets from "./Wallets";
import ComingSoon from "./ComingSoon";
import Exchange from "./Exchange";

class Main extends Component {
  state = {
    coinName: "Bitcoin",
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
            setCoin={this.setCoin}
            coinName={this.state.coinName}
            coinSymbol={this.state.coinSymbol}
          />
        )}
        {this.props.active === "Exchange" && <Exchange />}
        {(this.props.active === "History" ||
          this.props.active === "Settings") && <ComingSoon />}
      </section>
    );
  }
}

export default Main;
