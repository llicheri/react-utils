import React, { Component } from "react";

import { Spinner, Aux, GenericInput } from "react-utils-llicheri";

export default class App extends Component {
  state = {
    viewSpinner: false
  };

  handleViewSpinner = () => {
    this.setState(prevState => {
      return { viewSpinner: !prevState.viewSpinner };
    });
  };

  render() {
    return (
      <Aux>
        <button onClick={this.handleViewSpinner}>View spinner</button>
        {this.state.viewSpinner ? <Spinner /> : null}
        <GenericInput type="text" />
      </Aux>
    );
  }
}
