import React, { useState } from "react";
import ClassSelector from "./ClassSelector";
import Schedule from "./Schedule";
import Timetable from "./Timetable";
import { Button, Result } from "antd";

const lessons = [
  [
    {
      id: [3],
      classroomids: ["339"],
    },
    {
      id: [1],
      classroomids: ["202"],
    },
    {
      id: [2],
      classroomids: ["218"],
    },
    {
      id: [3],
      classroomids: ["126"],
    },
    {
      id: [4],
      classroomids: ["217"],
    },
    {
      id: [3],
      classroomids: ["339"],
    },
    {
      id: [1],
      classroomids: ["202"],
    },
    {
      id: [2],
      classroomids: ["218"],
    },
    {
      id: [3],
      classroomids: ["126"],
    },
    {
      id: [4],
      classroomids: ["217"],
    },
  ],

  [
    {
      id: [1],
      classroomids: ["339"],
    },
    {
      id: [2],
      classroomids: ["202"],
    },
    {
      id: [3],
      classroomids: ["218"],
    },
    {
      id: [4],
      classroomids: ["126"],
    },
    {
      id: [0],
      classroomids: ["217"],
    },
    {
      id: [1],
      classroomids: ["339"],
    },
    {
      id: [2],
      classroomids: ["202"],
    },
    {
      id: [3],
      classroomids: ["218"],
    },
    {
      id: [4],
      classroomids: ["126"],
    },
    {
      id: [0],
      classroomids: ["217"],
    },
  ],

  [
    {
      id: [2],
      classroomids: ["339"],
    },
    {
      id: [3],
      classroomids: ["202"],
    },
    {
      id: [6],
      classroomids: ["218"],
    },
    {
      id: [3],
      classroomids: ["126"],
    },
    {
      id: [5],
      classroomids: ["217"],
    },
    {
      id: [2],
      classroomids: ["339"],
    },
    {
      id: [3],
      classroomids: ["202"],
    },
    {
      id: [6],
      classroomids: ["218"],
    },
    {
      id: [3],
      classroomids: ["126"],
    },
    {
      id: [5],
      classroomids: ["217"],
    },
  ],

  [
    {
      id: [1],
      classroomids: ["339"],
    },
    {
      id: [0],
      classroomids: ["202"],
    },
    {
      id: [2],
      classroomids: ["218"],
    },
    {
      id: [4],
      classroomids: ["126"],
    },
    {
      id: [6],
      classroomids: ["217"],
    },
    {
      id: [1],
      classroomids: ["339"],
    },
    {
      id: [0],
      classroomids: ["202"],
    },
    {
      id: [2],
      classroomids: ["218"],
    },
    {
      id: [4],
      classroomids: ["126"],
    },
    {
      id: [6],
      classroomids: ["217"],
    },
  ],
  [
    {
      id: [8],
      classroomids: ["339"],
    },
    {
      id: [7],
      classroomids: ["202"],
    },
    {
      id: [1],
      classroomids: ["218"],
    },
    {
      id: [4],
      classroomids: ["126"],
    },
    {
      id: [6],
      classroomids: ["217"],
    },
    {
      id: [8],
      classroomids: ["339"],
    },
    {
      id: [7],
      classroomids: ["202"],
    },
    {
      id: [1],
      classroomids: ["218"],
    },
    {
      id: [4],
      classroomids: ["126"],
    },
    {
      id: [6],
      classroomids: ["217"],
    },
  ],
];
const schedule = [
  {
    id: "7",
    lessons,
  },
  {
    id: "8",
    lessons,
  },
];

const App = () => {
  const [classId, setClassAll, setWeek] = useState("");

  const handleClassSelect = (selectedClass) => {
    setClassAll(selectedClass);
  };
  return (
    <div>
      <Timetable />
      <ClassSelector onClassSelect={handleClassSelect} />

      <Schedule lessons={lessons} classId={classId} />

      <Button
        type="primary"
        onClick={() => (
          <Result
            status="success"
            title="Successfully Purchased Cloud Server ECS!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
              <Button type="primary" key="console">
                Go Console
              </Button>,
              <Button key="buy">Buy Again</Button>,
            ]}
          />
        )}
      >
        dinero gratis
      </Button>
    </div>
  );
};

export default App;
