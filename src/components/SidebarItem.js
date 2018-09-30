import React, { Component } from "react";

class SidebarItem extends Component {
  render() {
    const { className, itemName } = this.props;
    return (
      <li
        className={className}
        onClick={this.props.setActiveComponent.bind(this, itemName)}
      >
        <button>
          {this.props.children}
          <span>{itemName}</span>
        </button>
      </li>
    );
  }
}

export default SidebarItem;
