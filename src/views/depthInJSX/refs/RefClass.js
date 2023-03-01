import React, {Component} from 'react';

export default class RefClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'class component',
    };
  }

  handleChange(e) {
    if (e) {
      this.setState({
        value: e.target.value,
      })
    } else {
      console.info(this.state.value);
    }
  }

  render() {
    return (
      <div>
        可以通过 ref 直接调用 Class Component 中的 handleChange 方法
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
