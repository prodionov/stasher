import React, { Component } from "react";
import MainDisplay from "./components/MainDisplay";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>City Stasher</h1>
        <MainDisplay />
      </div>
    );
  }
}

export default App;
