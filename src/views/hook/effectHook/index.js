import React, {Component} from 'react';
import UseEffectFunction from "./UseEffectFunction";
import UseEffectFunctionRunOnlyOnce from "./UseEffectFunctionRunOnlyOnce";
import UseEffectClass from "./UseEffectClass";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="box" style={{ marginTop: '10px' }}>
        <h4>EFFECT HOOK</h4>
        <button onClick={() => this.setState({count: this.state.count + 1})}>click++</button>
        <p>{this.state.count}</p>
        <div className="maxHeight">
          <UseEffectFunction />
          <UseEffectFunctionRunOnlyOnce />
          <UseEffectClass />
        </div>
      </div>
    );
  }
}
