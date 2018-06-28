import React, { Component } from "react";
import { SingleStash } from "./SingleStash";

export default class MultipleStash extends Component {
  render() {
    return (
      <div className="stashList">
        {this.props.stashPoints.map((stash, i) => {
          return (
            <div key={i} className="stashItem">
              <SingleStash stash={stash} />
            </div>
          );
        })}
      </div>
    );
  }
}
