import React, { Component } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

class App extends Component {
  state = {
    active: "History"
  };
  setActiveComponent = name => {
    this.setState({ active: name });
  };

  render() {
    return (
      <div className="app">
        <main className="container">
          <Sidebar
            setActiveComponent={this.setActiveComponent}
            active={this.state.active}
          />
          <Main active={this.state.active} />
        </main>
      </div>
    );
  }
}

export default App;
