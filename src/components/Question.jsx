
import React from "react";
import Options from "./Options";

const Question = ({ data, onOptionClick }) => {
  return (
    <div className="question-container">
      <h2>{data.question}</h2>
      <Options options={data.options} onOptionClick={onOptionClick} />
    </div>
  );
};

export default Question;
