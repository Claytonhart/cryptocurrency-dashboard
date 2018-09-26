import React, { Component } from "react";
import axios from "axios";

import { MagnifyingGlass } from "./svg/Svg";

class Searchbar extends Component {
  state = {};

  componentDidMount() {
    this.getCoinList();
  }

  getCoinList = async () => {
    const url = `https://min-api.cryptocompare.com/data/all/coinlist`;
    const response = await axios.get(url);
    const { Data } = response.data;
    let coinList = Object.keys(Data);
    this.setState({ coinList });
  };

  render() {
    return (
      <section className="searchbar">
        <MagnifyingGlass className="searchbar__search-img" />
        <input
          type="text"
          className="searchbar__input"
          placeholder="Type in to search..."
        />
      </section>
    );
  }
}

export default Searchbar;
