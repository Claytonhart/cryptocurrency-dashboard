import React, { Component } from "react";
import Searchbar from "./Searchbar";
import Masthead from "./Masthead";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Searchbar setCoin={this.props.setCoin} active={this.props.active} />
        <Masthead />
      </nav>
    );
  }
}

export default Navbar;
