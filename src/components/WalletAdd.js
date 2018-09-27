import React, { Component } from "react";
import { Plus } from "./svg/Svg";

class WalletAdd extends Component {
  render() {
    return (
      <div className="wallet-add">
        <div className="currency-info">
          <div className="currency-info__icon-background">
            <Plus className="currency-info__icon" />
          </div>
          <div className="currency-info__currency">
            <div className="currency-info__triangle" />
            <h3>Add Wallet</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default WalletAdd;
