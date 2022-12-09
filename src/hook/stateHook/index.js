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
      <div>
        <CountClass />
        <CountFunction />
      </div>
    );
  }
}
