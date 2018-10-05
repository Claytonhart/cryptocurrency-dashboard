import React, { Component } from "react";
import axios from "axios";

import { MagnifyingGlass } from "./svg/Svg";

class Searchbar extends Component {
  state = {
    searchValue: ""
  };

  componentDidMount() {
    this.getCoinList();
  }

  getCoinList = async () => {
    const url = `https://min-api.cryptocompare.com/data/all/coinlist`;
    const response = await axios.get(url);
    const { Data } = response.data;
    let coinArray = Object.entries(Data);
    let coinList = coinArray.map(coin => {
      let key = coin[1].CoinName.toLowerCase();
      return { [key]: coin[0].toLowerCase() };
    });
    // for (let coin in Data) {
    //   debugger;
    //   coinList.push({ [coin.CoinName]: coin.Symbol });
    // }
    // let coinList = Data.map(coin => {
    //   return { [coin.CoinName]: coin.Symbol };
    // });
    // let coinList = Object.keys(Data);
    this.setState({ coinList });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value.toLowerCase() });
  };

  displayError = () => {
    this.setState({ error: true });
  };

  cryptoSearch = event => {
    event.preventDefault();
    let result = this.showSearchResults();
    if (result) {
      this.props.setCoin(result);
      this.setState({ error: false });
    } else {
      this.displayError();
    }
    this.setState({ searchValue: "" });
  };

  showSearchResults = () => {
    let result;
    // Loops through the coinList and returns the coin's name and symbol if the symbol
    // exists as either a key or value in each object. This is necessary because the
    // API only allows searches by symbol value, not name.
    for (let coin of this.state.coinList) {
      // if the coin's key === this.state.searchValue
      if (coin.hasOwnProperty(this.state.searchValue)) {
        result = [this.state.searchValue, coin[this.state.searchValue]];
        break;
      }
      // if the coin's vlue === this.state.searchValue
      if (Object.values(coin).join("") === this.state.searchValue) {
        result = [Object.keys(coin)[0], this.state.searchValue];
        break;
      }
    }
    return result;
  };

  render() {
    const className =
      this.props.active === "Dashboard" || this.props.active === "Wallets"
        ? "searchbar"
        : "searchbar searchbar-display-none";
    return (
      <section className={className}>
        <MagnifyingGlass className="searchbar__search-img" />
        <form onSubmit={this.cryptoSearch} className="searchbar__form">
          <input
            value={this.state.searchValue}
            onChange={this.handleChange}
            name="searchValue"
            type="text"
            className="searchbar__input"
            placeholder="Type in to search..."
            autoComplete="off"
          />
        </form>
        {this.state.error && (
          <div className="searchbar__error">Could not find your search</div>
        )}
      </section>
    );
  }
}

export default Searchbar;
