import React, { Component } from "react";
import { Credit } from "./svg/Svg";

class Wallet extends Component {
  render() {
    const totalPrice = (this.props.price * this.props.num).toFixed(2);
    return (
      <div className="wallet">
        <div className="currency-info">
          <div className="currency-info__icon-background">
            <Credit className="currency-info__icon" />
          </div>
          <div className="currency-info__currency">
            <div className="currency-info__triangle" />
            <p>
              {this.props.num} {this.props.name}
            </p>
            <h3>${totalPrice || "0"}</h3>
          </div>
        </div>

        <div className="price-history">
          <ul className="price-history__container">
            <li className="price-history__item">
              0.001045743 <span>$26.40</span>
            </li>
            <li className="price-history__item">
              0.001045743 <span>$76.40</span>
            </li>
            <li className="price-history__item">
              0.001045743 <span>$126.40</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Wallet;
