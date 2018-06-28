import React, { Component } from "react";
import MultipleStash from "./MultipleStash";
import AdvancedSearchBar from "./AdvancedSearchBar";

export default class MainDisplay extends Component {
  render() {
    return (
      <div className="mainDisplay">
        <AdvancedSearchBar />
        <MultipleStash />
      </div>
    );
  }
}
