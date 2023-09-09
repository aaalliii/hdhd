import React, { useState } from "react";
import ClassSelector from "./ClassSelector";
import Schedule from "./Schedule";
import Timetable from "./Timetable";
import { Button, Result } from "antd";

const lessons7 = [
  [
    { id: [3], classroomids: ["340"] },
    { id: [1], classroomids: ["202"] },
    { id: [2], classroomids: ["218"] },
    { id: [3], classroomids: ["126"] },
    { id: [4], classroomids: ["217"] },
    { id: [3], classroomids: ["339"] },
    { id: [1], classroomids: ["202"] },
    { id: [2], classroomids: ["218"] },
    { id: [3], classroomids: ["126"] },
    { id: [4], classroomids: ["217"] },
  ],
  [
    { id: [1], classroomids: ["339"] },
    { id: [2], classroomids: ["202"] },
    { id: [3], classroomids: ["218"] },
    { id: [4], classroomids: ["126"] },
    { id: [0], classroomids: ["217"] },
    { id: [1], classroomids: ["339"] },
    { id: [2], classroomids: ["202"] },
    { id: [3], classroomids: ["218"] },
    { id: [4], classroomids: ["126"] },
    { id: [0], classroomids: ["217"] },
  ],
  [
    { id: [2], classroomids: ["339"] },
    { id: [3], classroomids: ["202"] },
    { id: [6], classroomids: ["218"] },
    { id: [3], classroomids: ["126"] },
    { id: [5], classroomids: ["217"] },
    { id: [2], classroomids: ["339"] },
    { id: [3], classroomids: ["202"] },
    { id: [6], classroomids: ["218"] },
    { id: [3], classroomids: ["126"] },
    { id: [5], classroomids: ["217"] },
  ],
  [
    { id: [1], classroomids: ["339"] },
    { id: [0], classroomids: ["202"] },
    { id: [2], classroomids: ["218"] },
    { id: [4], classroomids: ["126"] },
    { id: [6], classroomids: ["217"] },
    { id: [1], classroomids: ["339"] },
    { id: [0], classroomids: ["202"] },
    { id: [2], classroomids: ["218"] },
    { id: [4], classroomids: ["126"] },
    { id: [6], classroomids: ["217"] },
  ],
  [
    { id: [8], classroomids: ["339"] },
    { id: [7], classroomids: ["202"] },
    { id: [1], classroomids: ["218"] },
    { id: [4], classroomids: ["126"] },
    { id: [6], classroomids: ["217"] },
    { id: [8], classroomids: ["339"] },
    { id: [7], classroomids: ["202"] },
    { id: [1], classroomids: ["218"] },
    { id: [4], classroomids: ["126"] },
    { id: [6], classroomids: ["217"] },
  ],
];
const lessons8 = [
  [
    { id: [2], classroomids: ["500"] },
    { id: [4], classroomids: ["501"] },
    { id: [6], classroomids: ["502"] },
    { id: [8], classroomids: ["503"] },
    { id: [0], classroomids: ["504"] },
    { id: [2], classroomids: ["505"] },
    { id: [4], classroomids: ["506"] },
    { id: [6], classroomids: ["507"] },
    { id: [8], classroomids: ["508"] },
    { id: [0], classroomids: ["509"] },
  ],
  [
    { id: [4], classroomids: ["501"] },
    { id: [6], classroomids: ["502"] },
    { id: [8], classroomids: ["503"] },
    { id: [0], classroomids: ["504"] },
    { id: [2], classroomids: ["505"] },
    { id: [4], classroomids: ["506"] },
    { id: [6], classroomids: ["507"] },
    { id: [8], classroomids: ["508"] },
    { id: [0], classroomids: ["509"] },
    { id: [2], classroomids: ["510"] },
  ],
  [
    { id: [0], classroomids: ["200"] },
    { id: [1], classroomids: ["201"] },
    { id: [2], classroomids: ["202"] },
    { id: [3], classroomids: ["203"] },
    { id: [4], classroomids: ["204"] },
    { id: [5], classroomids: ["205"] },
    { id: [6], classroomids: ["206"] },
    { id: [7], classroomids: ["207"] },
    { id: [8], classroomids: ["208"] },
    { id: [0], classroomids: ["209"] },
  ],
  [
    { id: [3], classroomids: ["203"] },
    { id: [4], classroomids: ["204"] },
    { id: [5], classroomids: ["205"] },
    { id: [6], classroomids: ["206"] },
    { id: [7], classroomids: ["207"] },
    { id: [8], classroomids: ["208"] },
    { id: [0], classroomids: ["209"] },
    { id: [1], classroomids: ["210"] },
    { id: [2], classroomids: ["211"] },
    { id: [3], classroomids: ["212"] },
  ],
  [
    { id: [8], classroomids: ["503"] },
    { id: [0], classroomids: ["504"] },
    { id: [2], classroomids: ["505"] },
    { id: [4], classroomids: ["506"] },
    { id: [6], classroomids: ["507"] },
    { id: [8], classroomids: ["508"] },
    { id: [0], classroomids: ["509"] },
    { id: [2], classroomids: ["510"] },
    { id: [4], classroomids: ["511"] },
    { id: [6], classroomids: ["512"] },
  ],
];
const lessons9 = [
  [
    { id: [3], classroomids: ["600"] },
    { id: [1], classroomids: ["601"] },
    { id: [2], classroomids: ["602"] },
    { id: [3], classroomids: ["603"] },
    { id: [4], classroomids: ["604"] },
    { id: [3], classroomids: ["605"] },
    { id: [1], classroomids: ["606"] },
    { id: [2], classroomids: ["607"] },
    { id: [3], classroomids: ["608"] },
    { id: [4], classroomids: ["609"] },
  ],
  [
    { id: [1], classroomids: ["610"] },
    { id: [2], classroomids: ["611"] },
    { id: [3], classroomids: ["612"] },
    { id: [4], classroomids: ["613"] },
    { id: [0], classroomids: ["614"] },
    { id: [1], classroomids: ["615"] },
    { id: [2], classroomids: ["616"] },
    { id: [3], classroomids: ["617"] },
    { id: [4], classroomids: ["618"] },
    { id: [0], classroomids: ["619"] },
  ],
  [
    { id: [2], classroomids: ["620"] },
    { id: [3], classroomids: ["621"] },
    { id: [6], classroomids: ["622"] },
    { id: [3], classroomids: ["623"] },
    { id: [5], classroomids: ["624"] },
    { id: [2], classroomids: ["625"] },
    { id: [3], classroomids: ["626"] },
    { id: [6], classroomids: ["627"] },
    { id: [3], classroomids: ["628"] },
    { id: [5], classroomids: ["629"] },
  ],
  [
    { id: [1], classroomids: ["630"] },
    { id: [0], classroomids: ["631"] },
    { id: [2], classroomids: ["632"] },
    { id: [4], classroomids: ["633"] },
    { id: [6], classroomids: ["634"] },
    { id: [1], classroomids: ["635"] },
    { id: [0], classroomids: ["636"] },
    { id: [2], classroomids: ["637"] },
    { id: [4], classroomids: ["638"] },
    { id: [6], classroomids: ["639"] },
  ],
  [
    { id: [8], classroomids: ["640"] },
    { id: [7], classroomids: ["641"] },
    { id: [1], classroomids: ["642"] },
    { id: [4], classroomids: ["643"] },
    { id: [6], classroomids: ["644"] },
    { id: [8], classroomids: ["645"] },
    { id: [7], classroomids: ["646"] },
    { id: [1], classroomids: ["647"] },
    { id: [4], classroomids: ["648"] },
    { id: [6], classroomids: ["649"] },
  ],
];
const lessons10 = [
  [
    { id: [2], classroomids: ["700"] },
    { id: [4], classroomids: ["701"] },
    { id: [6], classroomids: ["702"] },
    { id: [8], classroomids: ["703"] },
    { id: [0], classroomids: ["704"] },
    { id: [2], classroomids: ["705"] },
    { id: [4], classroomids: ["706"] },
    { id: [6], classroomids: ["707"] },
    { id: [8], classroomids: ["708"] },
    { id: [0], classroomids: ["709"] },
  ],
  [
    { id: [4], classroomids: ["710"] },
    { id: [6], classroomids: ["711"] },
    { id: [8], classroomids: ["712"] },
    { id: [0], classroomids: ["713"] },
    { id: [2], classroomids: ["714"] },
    { id: [4], classroomids: ["715"] },
    { id: [6], classroomids: ["716"] },
    { id: [8], classroomids: ["717"] },
    { id: [0], classroomids: ["718"] },
    { id: [2], classroomids: ["719"] },
  ],
  [
    { id: [0], classroomids: ["720"] },
    { id: [1], classroomids: ["721"] },
    { id: [2], classroomids: ["722"] },
    { id: [3], classroomids: ["723"] },
    { id: [4], classroomids: ["724"] },
    { id: [5], classroomids: ["725"] },
    { id: [6], classroomids: ["726"] },
    { id: [7], classroomids: ["727"] },
    { id: [8], classroomids: ["728"] },
    { id: [0], classroomids: ["729"] },
  ],
  [
    { id: [3], classroomids: ["730"] },
    { id: [4], classroomids: ["731"] },
    { id: [5], classroomids: ["732"] },
    { id: [6], classroomids: ["733"] },
    { id: [7], classroomids: ["734"] },
    { id: [8], classroomids: ["735"] },
    { id: [0], classroomids: ["736"] },
    { id: [1], classroomids: ["737"] },
    { id: [2], classroomids: ["738"] },
    { id: [3], classroomids: ["739"] },
  ],
  [
    { id: [8], classroomids: ["740"] },
    { id: [0], classroomids: ["741"] },
    { id: [2], classroomids: ["742"] },
    { id: [4], classroomids: ["743"] },
    { id: [6], classroomids: ["744"] },
    { id: [8], classroomids: ["745"] },
    { id: [0], classroomids: ["746"] },
    { id: [2], classroomids: ["747"] },
    { id: [4], classroomids: ["748"] },
    { id: [6], classroomids: ["749"] },
  ],
];
const lessons11 = [
  [
    { id: [5], classroomids: ["800"] },
    { id: [3], classroomids: ["801"] },
    { id: [1], classroomids: ["802"] },
    { id: [7], classroomids: ["803"] },
    { id: [9], classroomids: ["804"] },
    { id: [5], classroomids: ["805"] },
    { id: [3], classroomids: ["806"] },
    { id: [1], classroomids: ["807"] },
    { id: [7], classroomids: ["808"] },
    { id: [9], classroomids: ["809"] },
  ],
  [
    { id: [3], classroomids: ["810"] },
    { id: [1], classroomids: ["811"] },
    { id: [7], classroomids: ["812"] },
    { id: [9], classroomids: ["813"] },
    { id: [5], classroomids: ["814"] },
    { id: [3], classroomids: ["815"] },
    { id: [1], classroomids: ["816"] },
    { id: [7], classroomids: ["817"] },
    { id: [9], classroomids: ["818"] },
    { id: [5], classroomids: ["819"] },
  ],
  [
    { id: [7], classroomids: ["820"] },
    { id: [9], classroomids: ["821"] },
    { id: [5], classroomids: ["822"] },
    { id: [3], classroomids: ["823"] },
    { id: [1], classroomids: ["824"] },
    { id: [7], classroomids: ["825"] },
    { id: [9], classroomids: ["826"] },
    { id: [5], classroomids: ["827"] },
    { id: [3], classroomids: ["828"] },
    { id: [1], classroomids: ["829"] },
  ],
  [
    { id: [9], classroomids: ["830"] },
    { id: [5], classroomids: ["831"] },
    { id: [3], classroomids: ["832"] },
    { id: [1], classroomids: ["833"] },
    { id: [7], classroomids: ["834"] },
    { id: [9], classroomids: ["835"] },
    { id: [5], classroomids: ["836"] },
    { id: [3], classroomids: ["837"] },
    { id: [1], classroomids: ["838"] },
    { id: [7], classroomids: ["839"] },
  ],
  [
    { id: [5], classroomids: ["840"] },
    { id: [3], classroomids: ["841"] },
    { id: [1], classroomids: ["842"] },
    { id: [7], classroomids: ["843"] },
    { id: [9], classroomids: ["844"] },
    { id: [5], classroomids: ["845"] },
    { id: [3], classroomids: ["846"] },
    { id: [1], classroomids: ["847"] },
    { id: [7], classroomids: ["848"] },
    { id: [9], classroomids: ["849"] },
  ],
];
const lessons12 = [
  [
    { id: [6], classroomids: ["900"] },
    { id: [8], classroomids: ["901"] },
    { id: [2], classroomids: ["902"] },
    { id: [4], classroomids: ["903"] },
    { id: [0], classroomids: ["904"] },
    { id: [6], classroomids: ["905"] },
    { id: [8], classroomids: ["906"] },
    { id: [2], classroomids: ["907"] },
    { id: [4], classroomids: ["908"] },
    { id: [0], classroomids: ["909"] },
  ],
  [
    { id: [8], classroomids: ["910"] },
    { id: [2], classroomids: ["911"] },
    { id: [4], classroomids: ["912"] },
    { id: [0], classroomids: ["913"] },
    { id: [6], classroomids: ["914"] },
    { id: [8], classroomids: ["915"] },
    { id: [2], classroomids: ["916"] },
    { id: [4], classroomids: ["917"] },
    { id: [0], classroomids: ["918"] },
    { id: [6], classroomids: ["919"] },
  ],
  [
    { id: [2], classroomids: ["920"] },
    { id: [4], classroomids: ["921"] },
    { id: [0], classroomids: ["922"] },
    { id: [6], classroomids: ["923"] },
    { id: [8], classroomids: ["924"] },
    { id: [2], classroomids: ["925"] },
    { id: [4], classroomids: ["926"] },
    { id: [0], classroomids: ["927"] },
    { id: [6], classroomids: ["928"] },
    { id: [8], classroomids: ["929"] },
  ],
  [
    { id: [4], classroomids: ["930"] },
    { id: [0], classroomids: ["931"] },
    { id: [6], classroomids: ["932"] },
    { id: [8], classroomids: ["933"] },
    { id: [2], classroomids: ["934"] },
    { id: [4], classroomids: ["935"] },
    { id: [0], classroomids: ["936"] },
    { id: [6], classroomids: ["937"] },
    { id: [8], classroomids: ["938"] },
    { id: [2], classroomids: ["939"] },
  ],
  [
    { id: [0], classroomids: ["940"] },
    { id: [6], classroomids: ["941"] },
    { id: [8], classroomids: ["942"] },
    { id: [2], classroomids: ["943"] },
    { id: [4], classroomids: ["944"] },
    { id: [0], classroomids: ["945"] },
    { id: [6], classroomids: ["946"] },
    { id: [8], classroomids: ["947"] },
    { id: [2], classroomids: ["948"] },
    { id: [4], classroomids: ["949"] },
  ],
];

function getRandomId() {
  return Math.floor(Math.random() * 13);
}

function getRandomClassroomId() {
  return Math.floor(Math.random() * 1000);
}

function randomizeIdsAndClassroomIdsInLessons(lessons) {
  for (const lesson of lessons) {
    for (const entry of lesson) {
      entry.id = [getRandomId()];
      entry.classroomids = [getRandomClassroomId()];
    }
  }
}

randomizeIdsAndClassroomIdsInLessons(lessons7);
randomizeIdsAndClassroomIdsInLessons(lessons8);
randomizeIdsAndClassroomIdsInLessons(lessons9);
randomizeIdsAndClassroomIdsInLessons(lessons10);
randomizeIdsAndClassroomIdsInLessons(lessons11);
randomizeIdsAndClassroomIdsInLessons(lessons12);

const schedule = {
  ["7"]: lessons7,
  ["8"]: lessons8,
  ["9"]: lessons9,
  ["10"]: lessons10,
  ["11"]: lessons11,
  ["12"]: lessons12,
};

const App = () => {
  const [classId, setClassID,] = useState("");
  const handleClassSelect = (selectedClass) => {
    setClassID(selectedClass);
  };
  const resultLessons = schedule[classId] || schedule["7"];
  console.log(resultLessons);
  return (
    <div>
      <Timetable />
      <ClassSelector onClassSelect={handleClassSelect} />
      <Schedule lessons={resultLessons} classId={classId} />
    </div>
  );
};

export default App;
