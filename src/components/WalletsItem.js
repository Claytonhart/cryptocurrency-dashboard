import React, { Component } from "react";

class WalletsItem extends Component {
  render() {
    return (
      <button
        onClick={this.props.setCoin.bind(this, [
          this.props.coinName,
          this.props.coinSymbol
        ])}
        className={this.props.className}
      >
        {this.props.coinName}
      </button>
    );
  }
}

export default WalletsItem;
