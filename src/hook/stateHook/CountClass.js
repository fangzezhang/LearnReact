import React, {Component} from 'react';

export default class CountClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>Class count: {this.state.count}</p>
        <button onClick={() => {
          this.setState((state, props) => ({
            count: state.count + 1
          }))
        }}>
          click + 1
        </button>
      </div>
    );
  }
}
