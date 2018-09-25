import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import CryptoChart from "./CryptoChart";

class Main extends Component {
  render() {
    return (
      <main className="container">
        <Sidebar />
        <section className="main">
          <Navbar />
          <div className="main-content">
            <div className="main-column">
              <CryptoChart />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
