import React, { Component } from "react";
import Wallet from "./Wallet";

class WalletList extends Component {
  render() {
    return (
      <section className="wallet-list">
        <Wallet />
        <Wallet />
        <Wallet />
      </section>
    );
  }
}

export default WalletList;
