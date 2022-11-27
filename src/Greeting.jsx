import React, { Component } from "react";
import { LanguageContext } from "./App";

export default class Greeting extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {({ greetings, language }) => <h1>{greetings[language]}</h1>}
      </LanguageContext.Consumer>
    );
  }
}
