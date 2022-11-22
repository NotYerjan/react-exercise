import React, { Component } from "react";

export default class ClickTracker extends Component {
  state = { clickedBtn: null };

  btnHandler = (e) => {
    this.setState({ clickedBtn: e.target.innerText });
  };

  render() {
    return (
      <>
        <button onClick={this.btnHandler}>First</button>
        <button onClick={this.btnHandler}>Second</button>
        <button onClick={this.btnHandler}>Third</button>
        {this.state.clickedBtn && (
          <h1>{this.state.clickedBtn} button was clicked</h1>
        )}
      </>
    );
  }
}
