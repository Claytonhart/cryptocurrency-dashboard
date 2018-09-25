import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import CryptoChart from "./CryptoChart";
import WalletList from "./WalletList";

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
              <WalletList />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
