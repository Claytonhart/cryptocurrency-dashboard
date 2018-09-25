import React, { Component } from "react";

import { Grid, Mail, Bell, DownArrow } from "./svg/Svg";

class Masthead extends Component {
  render() {
    return (
      <div className="masthead">
        <div className="masthead-icons">
          <Grid className="masthead-icons__icon masthead-icons__icon--grid" />
          <Mail className="masthead-icons__icon masthead-icons__icon--mail" />
          <Bell className="masthead-icons__icon" />
        </div>
        <div className="masthead-about">
          <span className="masthead-about__name">Jordan Belfort</span>
          <span className="masthead-about__job-title">Trader</span>
        </div>
        <DownArrow className="masthead-icons__icon masthead-icons__icon--down-arrow" />
      </div>
    );
  }
}

export default Masthead;
