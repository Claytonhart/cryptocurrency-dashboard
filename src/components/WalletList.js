import React, { Component } from "react";
import axios from "axios";

import Wallet from "./Wallet";
import WalletAdd from "./WalletAdd";

class WalletList extends Component {
  state = {};

  async componentDidMount() {
    const url =
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD";
    const response = await axios.get(url);
    const { data } = response;
    const btc = data.BTC.USD;
    const eth = data.ETH.USD;
    this.setState({ btc, eth });
    debugger;
  }

  render() {
    const { btc, eth } = this.state;
    return (
      <section className="wallet-list">
        <Wallet num={7.24} name="BTC" price={btc} />
        <Wallet num={18.12} name="ETH" price={eth} />
        <WalletAdd />
      </section>
    );
  }
}

export default WalletList;
