import React, { Component } from "react";
import { SingleStash } from "./SingleStash";

export default class MultipleStash extends Component {
  render() {
    return (
      <div className="stashesList">
        {this.props.stashPoints.map((stash, i) => {
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
