import React, { Component } from "react";

import { Browser, Cog, Folder, BarGraph } from "./svg/Svg";
import SidebarItem from "./SidebarItem";

class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <ul className="side-nav">
          <li className="side-nav__logo">logo</li>
          {/* <li
            className="side-nav__item side-nav__item--active"
            onClick={setActiveComponent.bind(this, "Dashboard")}
          >
            <a href="#main">
              <Browser className="side-nav__img" />
              <span>Dashboard</span>
            </a>
          </li>
          <li
            className="side-nav__item"
            onClick={setActiveComponent.bind(this, "Transactions")}
          >
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
          </li> */}

          <SidebarItem
            setActiveComponent={this.props.setActiveComponent}
            className="side-nav__item side-nav__item--active"
            itemName="Dashboard"
          >
            <Browser className="side-nav__img" />
          </SidebarItem>
          <SidebarItem
            setActiveComponent={this.props.setActiveComponent}
            className="side-nav__item"
            itemName="Transactions"
          >
            <Browser className="side-nav__img" />
          </SidebarItem>
          <SidebarItem
            setActiveComponent={this.props.setActiveComponent}
            className="side-nav__item"
            itemName="Exchange"
          >
            <BarGraph className="side-nav__img" />
          </SidebarItem>
          <SidebarItem
            setActiveComponent={this.props.setActiveComponent}
            className="side-nav__item"
            itemName="History"
          >
            <Folder className="side-nav__img" />
          </SidebarItem>
          <SidebarItem
            setActiveComponent={this.props.setActiveComponent}
            className="side-nav__item"
            itemName="Settings"
          >
            <Cog className="side-nav__img" />
          </SidebarItem>
        </ul>
        <div className="color-mode">Dark mode</div>
      </nav>
    );
  }
}

export default Sidebar;
