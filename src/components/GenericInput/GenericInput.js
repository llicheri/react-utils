import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";
import Aux from "../../hoc/Auxiliary";

class GenericInput extends Component {
  render() {
    let field = null;
    switch (this.props.type) {
      case "text":
        field = (
          <input
            placeholder={this.props.placeholder}
            className="form-control"
            type={this.props.type}
            value={this.props.value}
            onChange={event => this.props.handler(event, this.props.name)}
          />
        );
        break;
      case "email":
        field = (
          <input
            placeholder={this.props.placeholder}
            className="form-control"
            type={this.props.type}
            value={this.props.value}
            onChange={event => this.props.handler(event, this.props.name)}
          />
        );
        break;
      case "number":
        field = (
          <input
            placeholder={this.props.placeholder}
            className="form-control"
            type={this.props.type}
            value={this.props.value}
            onChange={event => this.props.handler(event, this.props.name)}
          />
        );
        break;
      case "note":
        field = (
          <textarea
            className="form-control"
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={event => this.props.handler(event, this.props.name)}
          />
        );
        break;
      case "date":
        field = (
          <DatePicker
            selected={this.props.value}
            onChange={event => this.props.handler(event, this.props.name)}
            dateFormat="dd/MM/yyyy"
            placeholderText={this.props.placeholder}
            maxDate={new Date()}
            className="form-control"
            calendarClassName="react-datepicker-popper-custom"
          />
        );
        break;
      case "radio":
        field = (
          <Aux>
            {this.props.choices.map(choice => {
              return (
                <Aux key={choice.value}>
                  <input
                    type="radio"
                    name={this.props.label}
                    id={choice.value}
                    value={choice.value}
                    checked={this.props.value === choice.value}
                    onChange={event =>
                      this.props.handler(event, this.props.name)
                    }
                  />
                  <label className="checkboxLabel" htmlFor={choice.value}>
                    {choice.label}
                  </label>
                </Aux>
              );
            })}
          </Aux>
        );
        break;
      case "checkbox":
        field = this.props.choices.map(choice => {
          return (
            <Aux key={choice.value}>
              <input
                type="checkbox"
                name={choice.value}
                id={choice.value}
                value={choice.value}
                checked={this.props.value.indexOf(choice.value) >= 0}
                onChange={event => this.props.handler(event, this.props.name)}
              />
              <label className="checkboxLabel" htmlFor={choice.value}>
                {choice.label}
              </label>
            </Aux>
          );
        });
        break;
      case "calendar":
        field = (
          <table className="calendarTable">
            <thead>
              <tr>
                <th></th>
                {this.props.choices.days.map(day => {
                  return <th key={day.value}>{day.label}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {this.props.choices.hours.map(hour => {
                return (
                  <tr key={hour.value}>
                    <td>{hour.label}</td>
                    {this.props.choices.days.map(day => {
                      const classes = ["circle"];
                      if (this.props.value[day.value + hour.value]) {
                        classes.push("full");
                      }
                      return (
                        <td
                          key={day.label + hour.label}
                          onClick={() =>
                            this.props.handler(
                              day.value,
                              hour.value,
                              this.props.name
                            )
                          }
                        >
                          <div className={classes.join(" ")}></div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
        break;
      case "file":
        field = (
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputFileId"
              // ref={this.props.inputFile}
              onChange={event => this.props.handler(event, this.props.name)}
            />
            <label className="custom-file-label" htmlFor="inputFileId">
              {this.props.fileName
                ? this.props.fileName
                : "Selezionare un file"}
            </label>
          </div>
        );
        break;

      default:
    }
    return (
      <div className="inputContainer">
        <label className="label">{this.props.label}</label>
        {field}
      </div>
    );
  }
}

GenericInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.any,
  placeholder: PropTypes.string,
  handler: PropTypes.func,
  choices: PropTypes.any,
  fileName: PropTypes.any
};

export default GenericInput;
