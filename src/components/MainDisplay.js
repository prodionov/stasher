import React, { Component } from "react";
import MultipleStash from "./MultipleStash";
import AdvancedSearchBar from "./AdvancedSearchBar";
import { stashFilter } from "../utils/stashFilter";

export default class MainDisplay extends Component {
  state = {
    stashMultiple: []
  };

  componentWillMount() {
    stashFilter().then(data => this.setState({ stashMultiple: data }));
  }

  submitRequest = params => {
    stashFilter(params).then(data => this.setState({ stashMultiple: data }));
  };

  render() {
    const stashPoints = this.state.stashMultiple;
    return (
      <div className="mainDisplay">
        <AdvancedSearchBar submitRequest={this.submitRequest} />
        <MultipleStash stashPoints={this.state.stashMultiple} />
      </div>
    );
  }
}
