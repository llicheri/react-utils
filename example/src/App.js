import React, { Component } from "react";

import { Spinner, Aux, GenericInput } from "react-utils";

export default class App extends Component {
  render() {
    return (
      <Aux>
        <Spinner />
        <GenericInput type="text" />
      </Aux>
    );
  }
}
