import React, { Component } from "react";
import Searchbar from "./Searchbar";
import Masthead from "./Masthead";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Searchbar />
        <Masthead />
      </nav>
    );
  }
}

export default Navbar;
