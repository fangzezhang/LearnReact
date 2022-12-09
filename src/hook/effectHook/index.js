import React, {Component} from 'react';
import UseEffectFunction from "./UseEffectFunction";
import UseEffectClass from "./UseEffectClass";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <UseEffectFunction />
        <UseEffectClass />
      </div>
    );
  }
}
