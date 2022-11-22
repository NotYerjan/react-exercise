import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: this.props.count ?? 0,
  };
  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState((state) => {
        return { count: state.count + (this.props.increment ?? 1) };
      });
    }, this.props.interval ?? 1000);
  }
  render() {
    return <h1>{this.state.count}</h1>;
  }
}
