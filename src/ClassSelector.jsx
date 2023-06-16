import React, { useState } from "react";

const ClassSelector = ({ onClassSelect }) => {
  const [classValue, setClassValue] = useState("");

  const handleChange = (event) => {
    setClassValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onClassSelect(classValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your class:
        <input type="text" value={classValue} onChange={handleChange} />
      </label>
    </form>
  );
};

export default ClassSelector;
