import React, {Component} from 'react';
import UseEffectFunction from "./UseEffectFunction";
import UseEffectFunctionRunOnlyOnce from "./UseEffectFunctionRunOnlyOnce";
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
        <UseEffectFunctionRunOnlyOnce />
        <UseEffectClass />
      </div>
    );
  }
}
