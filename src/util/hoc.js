import React from "react";

export function logProps(Component) {
  class LogProps extends React.Component {
    componentDidMount() {
      console.info('HOC lifecycle componentDidMount');
    }

    render() {
      const { forwardedRef, ...rest } = this.props;

      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  return React.forwardRef(function (props, ref) {
    return <LogProps forwardedRef={ref} {...props} />
  })
}
