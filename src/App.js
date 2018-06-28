import React, { Component } from "react";
import MultipleStash from "./components/MultipleStash";
import SearchBar from "./components/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
        <SearchBar />
        <MultipleStash />
      </div>
    );
  }
}

export default App;
