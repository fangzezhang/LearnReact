import React, {Component} from 'react';
import CountClass from "./CountClass";
import CountFunction from "./CountFunction";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(event) {
    console.info(event);
  }

  render() {
    return (
      <div className="box">
        <h4>STATE HOOK</h4>
        <div className="maxHeight">
          <CountClass />
          <CountFunction onclick={this.handleClick.bind(this)}>
            <p>组件上无法绑定click, 只能在DOM元素上绑定</p>
            <p>组件上绑定只会被当作 prop 传递</p>
          </CountFunction>
        </div>
      </div>
    );
  }
}
