import React, { Component } from "react";
import Sidebar from "./Sidebar";

class Main extends Component {
  render() {
    return (
      <main className="container">
        <Sidebar />
      </main>
    );
  }
}

export default Main;
