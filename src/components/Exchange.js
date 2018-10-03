import React, { Component } from "react";
import axios from "axios";

class Exchange extends Component {
  state = {
    exchangeItems: null
  };
  async componentDidMount() {
    const url =
      "https://min-api.cryptocompare.com/data/top/totalvol?limit=30&tsym=USD";
    const response = await axios.get(url);
    const data = response.data.Data;

    const exchangeItems = data.map(coin => {
      const name = coin.CoinInfo.FullName;
      const id = coin.CoinInfo.Id;
      const from = coin.ConversionInfo.CurrencyFrom;
      const to = coin.ConversionInfo.CurrencyTo;
      let volume = coin.ConversionInfo.TotalVolume24H.toFixed(2);

      const numberWithCommas = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

      volume = numberWithCommas(volume);

      return (
        <div key={id} className="exchange-list-item">
          <div className="exchange-list-item__item">{name}</div>
          <div className="exchange-list-item__item">{from}</div>
          <div className="exchange-list-item__item">{to}</div>
          <div className="exchange-list-item__item">{volume}</div>
          <div className="exchange-list-item__item">{id}</div>
        </div>
      );
    });
    this.setState({ exchangeItems });
  }

  render() {
    return (
      <section className="exchange">
        <h2 className="exchange__title">Top coins by total Volume</h2>
        <div className="exchange-list__header">
          <div className="exchange-list__header-item">Name</div>
          <div className="exchange-list__header-item">From</div>
          <div className="exchange-list__header-item">To</div>
          <div className="exchange-list__header-item">Total Volume</div>
          <div className="exchange-list__header-item">Id</div>
        </div>
        <div className="exchange-list">{this.state.exchangeItems}</div>
      </section>
    );
  }
}

export default Exchange;
