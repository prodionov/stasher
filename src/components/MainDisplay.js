import React, { Component } from "react";
import MultipleStash from "./MultipleStash";
import AdvancedSearchBar from "./AdvancedSearchBar";
import { dataRequest } from "../utils/dataRequest";

export default class MainDisplay extends Component {
  state = {
    stashMultiple: [],
    isFirstDisplay: true
  };

  componentWillMount() {
    dataRequest().then(data => this.setState({ stashMultiple: data }));
    this.setState({ isFirstDisplay: false });
  }

  submitRequest = params => {
    dataRequest(params)
      .then(data => this.setState({ stashMultiple: data }))
      .then(() => {
        this.setState({ isFirstDisplay: false });
      });
  };

  render() {
    const stashPoints = this.state.stashMultiple;
    const length = stashPoints.length;
    const isFirstDisplay = this.state.isFirstDisplay;
    console.log("isFirstDisplay", isFirstDisplay);
    return (
      <div className="mainDisplay">
        <div className="header">
          <h1>City Stasher</h1>
          <AdvancedSearchBar submitRequest={this.submitRequest} />
        </div>
        {!isFirstDisplay & (length === 0) ? (
          <h2>Loading...</h2>
        ) : (
          <MultipleStash stashPoints={this.state.stashMultiple} />
        )}
      </div>
    );
  }
}
