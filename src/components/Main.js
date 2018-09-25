import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

class Main extends Component {
  render() {
    return (
      <main className="container">
        <Sidebar />
        <section className="main">
          <Navbar />
        </section>
      </main>
    );
  }
}

export default Main;
