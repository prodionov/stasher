import React, { Component } from "react";
import { stashFilter } from "../utils/stashFilter";
import { SingleStash } from "./SingleStash";

export default class MultipleStash extends Component {
  state = {
    stashMultiple: []
  };

  componentWillMount() {
    stashFilter().then(data => this.setState({ stashMultiple: data }));
  }

  render() {
    return (
      <div className="stashesList">
        {this.state.stashMultiple.map((stash, i) => {
          return (
            <div key={i} className="stash">
              <SingleStash stash={stash} />
            </div>
          );
        })}
      </div>
    );
  }
}
