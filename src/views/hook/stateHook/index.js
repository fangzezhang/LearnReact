import React, {Component} from 'react';
import CountClass from "./CountClass";
import CountFunction from "./CountFunction";
import ErrorBoundary from "@/components/ErrorBoundary";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick(event) {
  }

  render() {
    return (
      <div className="box">
        <h4>STATE HOOK</h4>
        <div className="maxHeight">
          <ErrorBoundary>
            <CountClass />
            <CountFunction onclick={this.handleClick.bind(this)}>
              <p>组件上无法绑定click, 只能在DOM元素上绑定</p>
              <p>组件上绑定只会被当作 prop 传递</p>
            </CountFunction>
            <p>parent count: {this.state.count}</p>
            <button
              onClick={() => this.setState({count: this.state.count + 1})}
            >parent click: count +1</button>
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}
