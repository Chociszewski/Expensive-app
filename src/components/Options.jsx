import React from "react";
import Option from "./Option.jsx";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        remove all
      </button>
    </div>
    {props.options.length === 0 && (
      <p className="widget__message">Please add an optin to get started</p>
    )}
    {props.options.map((option, index) => (
      <Option
        option={option}
        count={index + 1}
        key={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
