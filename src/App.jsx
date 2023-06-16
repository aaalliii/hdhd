import React, { useState } from "react";
import ClassSelector from "./ClassSelector";
import Schedule from "./Schedule";
import Timetable from "./Timetable";

const App = () => {
  const [classAll, setClassAll] = useState("");

  const handleClassSelect = (selectedClass) => {
    setClassAll(selectedClass);
  };

  return (
    <div>
      <ClassSelector onClassSelect={handleClassSelect} />
      <Schedule classAll={classAll} />
      <Timetable />
    </div>
  );
};

export default App;
