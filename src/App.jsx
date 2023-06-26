import React, { useState } from "react";
import ClassSelector from "./ClassSelector";
import Schedule from "./Schedule";
import Timetable from "./Timetable";
import { Button } from "antd";

const lessons = [
  [
    [
      {
        color: "#A5DEF2",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#5BAEB7",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#1E80C1",
        id: [2],
        duration: 2,
        starttime: "11:10",
        endtime: "12:50",
        classroomids: ["218"],
      },
      {
        color: "#414C6B",
        id: [3],
        duration: 2,
        starttime: "13:10",
        endtime: "14:50",
        classroomids: ["126"],
      },
      {
        color: "#067FD0",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
    [
      {
        color: "#A5DEF2",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#5BAEB7",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#1E80C1",
        id: [2],
        duration: 2,
        starttime: "11:10",
        endtime: "12:50",
        classroomids: ["218"],
      },
      {
        color: "#414C6B",
        id: [3],
        duration: 2,
        starttime: "13:10",
        endtime: "14:50",
        classroomids: ["126"],
      },
      {
        color: "#067FD0",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
    [
      {
        color: "#A5DEF2",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#5BAEB7",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#1E80C1",
        id: [2],
        duration: 2,
        starttime: "11:10",
        endtime: "12:50",
        classroomids: ["218"],
      },
      {
        color: "#414C6B",
        id: [3],
        duration: 2,
        starttime: "13:10",
        endtime: "14:50",
        classroomids: ["126"],
      },
      {
        color: "#067FD0",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
    [
      {
        color: "#A5DEF2",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#5BAEB7",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#1E80C1",
        id: [2],
        duration: 2,
        starttime: "11:10",
        endtime: "12:50",
        classroomids: ["218"],
      },
      {
        color: "#414C6B",
        id: [3],
        duration: 2,
        starttime: "13:10",
        endtime: "14:50",
        classroomids: ["126"],
      },
      {
        color: "#067FD0",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
  ],
];

const App = () => {
  const [classAll, setClassAll] = useState("");

  const handleClassSelect = (selectedClass) => {
    setClassAll(selectedClass);
  };

  return (
    <div class={{ backgrondColor: "#808080" }}>
      <ClassSelector onClassSelect={handleClassSelect} />
      <Schedule lessons={lessons} />
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
