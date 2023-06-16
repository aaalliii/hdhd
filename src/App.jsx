import React, { useState } from "react";
import ClassSelector from "./ClassSelector";
import Schedule from "./Schedule";
import Timetable from "./Timetable";
import { Button } from "antd";

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
      <Button
        type="primary"
        href={"https://www.youtube.com/watch?v=xvFZjo5PgG0"}
      >
        free money
      </Button>
    </div>
  );
};

export default App;
