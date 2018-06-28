import React, { Component } from "react";
import { stashFilter } from "../utils/stashFilter";

export default class Advanced extends Component {
  state = {
    search: "",
    twentyfour_seven: "yes",
    featured: "yes"
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    target.type === "select-one"
      ? this.setState({ featured: value })
      : this.setState({ search: event.target.value });
    console.log("state", this.state);
  };

  searchRequest = event => {
    event.preventDefault();
    console.log(event.target.value);
    stashFilter({
      type: "advancedSearch",
      payload: {
        search: this.state.search,
        twentyfour_seven: this.state.twentyfour_seven,
        featured: this.state.featured
      }
    });
  };

  render() {
    return (
      <div className="searchBar">
        <form>
          <label>
            City:
            <input
              name="city"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Fetured Stash Points
            <select value={this.state.featured} onChange={this.handleChange}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <button onClick={this.searchRequest}>search</button>
        </form>
      </div>
    );
  }
}
