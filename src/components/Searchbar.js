import React, { Component } from "react";

import { MagnifyingGlass } from "./svg/Svg";

class Searchbar extends Component {
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
