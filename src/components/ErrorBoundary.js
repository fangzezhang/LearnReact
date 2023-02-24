import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染可以显降级 UI
    console.dir('static error:');
    console.dir(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.dir(error);
    console.dir(errorInfo);
  }

  componentDidMount() {
    console.info(this.props.children);
    console.info(this.state.hasError);
  }

  render() {
    if (this.state.hasError) {
      return <h1 style={{color: 'red'}}>Something went wrong...</h1>
    }
    return this.props.children;
  }
}
