import React, { Component } from "react";
import MultipleStash from "./components/MultipleStash";
import AdvancedSearchBar from "./components/AdvancedSearchBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
        <AdvancedSearchBar />
        <MultipleStash />
      </div>
    );
  }
}

export default App;
