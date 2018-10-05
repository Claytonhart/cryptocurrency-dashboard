import React, { Component } from "react";
import axios from "axios";

class History extends Component {
  state = {
    items: []
  };

  async componentDidMount() {
    const url =
      "https://min-api.cryptocompare.com/data/top/totalvol?limit=10&tsym=USD";
    const response = await axios.get(url);
    const data = response.data.Data;
    debugger;

    // let exchangeItems = [];
    // for (let coin of data) {
    //   const name = coin.CoinInfo.FullName;
    //   const from = coin.ConversionInfo.CurrencyFrom;

    //   const prices = await this.getMonthlyPrice(from);

    //   const oldPrice = prices[0];
    //   const newPrice = prices[1];
    //   const difference = (oldPrice - newPrice).toFixed(2);

    //   exchangeItems.push(
    //     <div key={from} className="exchange-list-item">
    //       <div className="exchange-list-item__item">{name}</div>
    //       <div className="exchange-list-item__item">{from}</div>
    //       <div className="exchange-list-item__item">{oldPrice}</div>
    //       <div className="exchange-list-item__item">{newPrice}</div>
    //       <div className="exchange-list-item__item">{difference}</div>
    //     </div>
    //   );
    // }

    const exchangeItems = await data.map(async coin => {
      const name = coin.CoinInfo.FullName;
      const from = coin.ConversionInfo.CurrencyFrom;

      const prices = await this.getMonthlyPrice(from);

      const oldPrice = prices[0];
      const newPrice = prices[1];

      let change;
      if (newPrice > oldPrice) {
        change = (newPrice / oldPrice).toFixed(2) + "%";
      } else {
        change = "- " + (oldPrice / newPrice).toFixed(2) + "%";
      }

      return (
        <div key={from} className="exchange-list-item">
          <div className="exchange-list-item__item">{name}</div>
          <div className="exchange-list-item__item">{from}</div>
          <div className="exchange-list-item__item">${oldPrice}</div>
          <div className="exchange-list-item__item">${newPrice}</div>
          <div className="exchange-list-item__item">{change}</div>
        </div>
      );
    });
    // this.setState({ exchangeItems });
    Promise.all(exchangeItems).then(items => this.setState({ items }));
  }

  getMonthlyPrice = async symbol => {
    const url = `https://min-api.cryptocompare.com/data/histoday?fsym=${symbol}&tsym=USD&limit=29`;
    const response = await axios.get(url);
    const data = response.data.Data;
    const oldPrice = data[0].close;
    const newPrice = data[29].close;
    debugger;
    return [oldPrice, newPrice];
  };

  render() {
    return (
      <section className="history">
        <h2 className="exchange__title">30 Day Change By Top Coins</h2>
        <div className="history-list__header">
          <div className="exchange-list__header-item">Name</div>
          <div className="exchange-list__header-item">Symbol</div>
          <div className="exchange-list__header-item">30 days ago</div>
          <div className="exchange-list__header-item">Current Price (USD)</div>
          <div className="exchange-list__header-item">Change</div>
        </div>
        {this.state.items}
      </section>
    );
  }
}

export default History;
