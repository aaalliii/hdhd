import React, { useState } from "react";

const ClassSelector = ({ onClassSelect }) => {
  const [classValue, setClassValue] = useState("");

  const handleChange = (event) => {
    setClassValue(parseInt(event.target.value, 10));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onClassSelect(classValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ingresa tu clase:
        <input type="number" value={classValue} onChange={handleChange} />
      </label>
    </form>
  );
};

export default ClassSelector;
