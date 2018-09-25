import React, { Component } from "react";
import { DownArrow } from "./svg/Svg";

class TransactionChart extends Component {
  render() {
    return (
      <section className="transaction-chart">
        <h3 className="transaction-chart__header">
          Transaction results
          <span>
            <DownArrow className="transaction-chart__arrow" />
          </span>
        </h3>
        <div className="transaction-chart__chart">chart</div>
        <ul className="transaction-chart__list">
          <li>Litecoin</li>
          <li>Bitcoin</li>
          <li>Etherium</li>
        </ul>
      </section>
    );
  }
}

export default TransactionChart;
