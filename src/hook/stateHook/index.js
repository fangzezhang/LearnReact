import React, {Component} from 'react';
import CountClass from "./CountClass";
import CountFunction from "./CountFunction";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="box">
        <h4>STATE HOOK</h4>
        <div className="maxHeight">
          <CountClass />
          <CountFunction />
        </div>
      </div>
    );
  }
}
