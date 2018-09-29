import React, { Component } from "react";

class SidebarItem extends Component {
  render() {
    const { className, itemName } = this.props;
    return (
      <li
        className={className}
        onClick={this.props.setActiveComponent.bind(this, itemName)}
      >
        <a href="#main">
          {this.props.children}
          <span>{itemName}</span>
        </a>
      </li>
    );
  }
}

export default SidebarItem;
