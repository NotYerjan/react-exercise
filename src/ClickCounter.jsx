import React, { Component } from "react";

export default class ClickCounter extends Component {
  state = {
    count: this.props.count,
  };
  incrementCount = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  render() {
    return (
      <>
        <div>count: {this.state.count}</div>
        <button onClick={this.incrementCount}>+</button>
      </>
    );
  }
}

ClickCounter.defaultProps = {
  count: 0,
  increment: 1,
};
