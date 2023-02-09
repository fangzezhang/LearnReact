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
      <div className="box" style={{ marginTop: '10px' }}>
        <h4>EFFECT HOOK</h4>
        <div className="maxHeight">
          <UseEffectFunction />
          <UseEffectFunctionRunOnlyOnce />
          <UseEffectClass />
        </div>
      </div>
    );
  }
}
