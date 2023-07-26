import React, { useState } from "react";
import ClassSelector from "./ClassSelector";
import Schedule from "./Schedule";
import Timetable from "./Timetable";
import { Button, Result } from "antd";

const lessons = [
  [
    [
      {
        color: "#485c54",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#59482c",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#6E0A1E",
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
        color: "#552c59",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
    [
      {
        color: "#485c54",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#59482c",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#6E0A1E",
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
        color: "#552c59",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
    [
      {
        color: "#485c54",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#59482c",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#6E0A1E",
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
        color: "#552c59",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
    [
      {
        color: "#485c54",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#59482c",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#6E0A1E",
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
        color: "#552c59",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
  ],
  [
    [
      {
        color: "#485c54",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#59482c",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#6E0A1E",
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
        color: "#552c59",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
    [
      {
        color: "#485c54",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#59482c",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#6E0A1E",
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
        color: "#552c59",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
    [
      {
        color: "#485c54",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#59482c",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#6E0A1E",
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
        color: "#552c59",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
    [
      {
        color: "#485c54",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#59482c",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#6E0A1E",
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
        color: "#552c59",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
  ],
  [
    [
      {
        color: "#485c54",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#59482c",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#6E0A1E",
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
        color: "#552c59",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
    [
      {
        color: "#485c54",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#59482c",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#6E0A1E",
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
        color: "#552c59",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
    [
      {
        color: "#485c54",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#59482c",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#6E0A1E",
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
        color: "#552c59",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
    [
      {
        color: "#485c54",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#59482c",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#6E0A1E",
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
        color: "#552c59",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
  ],
  [
    [
      {
        color: "#485c54",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#59482c",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#6E0A1E",
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
        color: "#552c59",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
    [
      {
        color: "#485c54",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#59482c",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#6E0A1E",
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
        color: "#552c59",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
    [
      {
        color: "#485c54",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#59482c",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#6E0A1E",
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
        color: "#552c59",
        id: [4],
        duration: 2,
        starttime: "14:55",
        endtime: "16:25",
        classroomids: ["217"],
      },
    ],
    [
      {
        color: "#485c54",
        id: [0],
        duration: 2,
        starttime: "08:00",
        endtime: "9:30",
        classroomids: ["339"],
      },
      {
        color: "#59482c",
        id: [1],
        duration: 2,
        starttime: "09:40",
        endtime: "11:05",
        classroomids: ["202"],
      },
      {
        color: "#6E0A1E",
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
        color: "#552c59",
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
  const [classAll, setClassAll, setWeek] = useState("");

  const handleClassSelect = (selectedClass) => {
    setClassAll(selectedClass);
  };
  //kak delat' backgroundColor?? :000
  //:000 result component from ant design ne smog zastavit' rabotat' 
  return (
    <div class={{ backgroundColor: "#403940" }}>
      <Timetable />
      <ClassSelector onClassSelect={handleClassSelect} />

      <Schedule lessons={lessons} />

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
