
import React from "react";

const Options = ({ options, onOptionClick }) => {
  return (
    <div className="options-container">
      {options.map((option, index) => (
        <button key={index} onClick={() => onOptionClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
