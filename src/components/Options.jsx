import React from "react";
import Option from "./Option.jsx";

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>remove all</button>
      {props.options.length === 0 && <p>Please add an optin to get started</p>}
      {props.options.map(option => (
        <Option
          option={option}
          key={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

export default Options;
