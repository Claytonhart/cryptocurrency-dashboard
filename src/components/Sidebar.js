import React, { Component } from "react";

import { Browser, Cog, Folder, BarGraph } from "./svg/Svg";

class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <ul className="side-nav">
          <li className="side-nav__logo">logo</li>
          <li className="side-nav__item side-nav__item--active">
            <a href="#main">
              <Browser className="side-nav__img" />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#main">
              <Browser className="side-nav__img" />
              <span>Transactions</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#main">
              <BarGraph className="side-nav__img" />
              <span>Exchange</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#main">
              <Folder className="side-nav__img" />
              <span>History</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#main">
              <Cog className="side-nav__img" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
        <div className="color-mode">Dark mode</div>
      </nav>
    );
  }
}

export default Sidebar;
