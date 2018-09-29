import React, { Component } from "react";

import { Browser, Cog, Folder, BarGraph } from "./svg/Svg";
import SidebarItem from "./SidebarItem";

class Sidebar extends Component {
  render() {
    const items = [
      ["Dashboard", Browser],
      ["Transactions", Browser],
      ["Exchange", BarGraph],
      ["History", Folder],
      ["Settings", Cog]
    ];

    const sidebaritems = items.map(item => {
      const IconName = item[1];
      return (
        <SidebarItem
          key={item[0]}
          setActiveComponent={this.props.setActiveComponent}
          className={
            this.props.active === item[0]
              ? "side-nav__item side-nav__item--active"
              : "side-nav__item"
          }
          itemName={item[0]}
        >
          <IconName className="side-nav__img" />
        </SidebarItem>
      );
    });
    return (
      <nav className="sidebar">
        <ul className="side-nav">
          <li className="side-nav__logo">logo</li>
          {sidebaritems}
        </ul>
        <div className="color-mode">Dark mode</div>
      </nav>
    );
  }
}

export default Sidebar;
