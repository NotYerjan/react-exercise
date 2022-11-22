import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";

export default class Counter extends Component {
  state = {
    count: this.props.count,
  };
  componentDidMount(props) {
    super(props);
    setInterval(() => {
      console.log(this.state.count);
      this.setState((state) => {
        return { count: state.count + this.props.increment };
      });
    }, this.props.interval);
  }
  render() {
    return <CounterDisplay count={this.state.count} />;
  }
}

Counter.defaultProps = {
  count: 0,
  interval: 1000,
  increment: 1,
};
