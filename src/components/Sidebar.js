import React, { Component } from "react";

import { Browser, Cog, Folder, BarGraph } from "./svg/Svg";

class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <ul className="side-nav">
          <li className="side-nav__logo">logo</li>
          <li className="side-nav__item">
            <Browser className="side-nav__img" />
            <span>Dashboard</span>
          </li>
          <li className="side-nav__item">
            <Browser className="side-nav__img" />
            <span>Transactions</span>
          </li>
          <li className="side-nav__item">
            <BarGraph className="side-nav__img" />
            <span>Exchange</span>
          </li>
          <li className="side-nav__item">
            <Folder className="side-nav__img" />
            <span>History</span>
          </li>
          <li className="side-nav__item">
            <Cog className="side-nav__img" />
            <span>Settings</span>
          </li>
        </ul>
        <div className="color-mode">Dark mode</div>
      </nav>
    );
  }
}

export default Sidebar;
