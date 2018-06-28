import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    search: ""
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  searchRequest = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="searchBar">
        <form>
          <input
            id="textInput"
            className="searchBar"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button onClick={this.searchRequest}>search</button>
        </form>
      </div>
    );
  }
}
