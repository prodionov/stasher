import React, { Component } from "react";
import { stashFilter } from "../utils/stashFilter";

export default class Advanced extends Component {
  state = {
    search: "",
    by_bags_last_30_days: false,
    featured: true
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    target.type === "select-one"
      ? this.setState({ [name]: value })
      : this.setState({ search: event.target.value });
  };

  submitRequest = event => {
    event.preventDefault();
    let params = {
      type: "advancedSearch",
      payload: {
        city: this.state.search,
        featured: this.state.featured,
        by_bags_last_30_days: this.state.by_bags_last_30_days
      }
    };
    this.props.submitRequest(params);
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
            <select
              name="featured"
              value={this.state.featured}
              onChange={this.handleChange}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
          <br />
          <label>
            Order by popularity
            <select
              name="by_bags_last_30_days"
              value={this.state.by_bags_last_30_days}
              onChange={this.handleChange}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
          <button onClick={this.submitRequest}>search</button>
        </form>
      </div>
    );
  }
}
