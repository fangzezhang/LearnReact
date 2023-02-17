import React, {Component} from 'react';

export default class UseEffectClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <p>You have clicked: {this.state.count}</p>
        <button onClick={() => {
          this.setState({count: this.state.count + 1})
        }}>
          click + 1
        </button>
      </div>
    );
  }
}
