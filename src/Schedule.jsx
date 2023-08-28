import React from "react";

const lessonsId = [
  "рус яз",
  "англ яз",
  "матан",
  "физ",
  "литра",
  "изо",
  "история",
  "физра",
  "инф",
  "баскет",
  "бокс",
  "немц яз",
  "игорь",
];
const colorId = [
  "#7F8C87",
  "#7E756E",
  "#7D5D5A",
  "#7D7E8A",
  "#7A6E78",
  "#6E7E8A",
  "#8A6E6E",
  "#6E8A8A",
  "#6E8A77",
  "#8A7E6E",
  "#7E758B",
  "#8A7C7D",
  "#768D87",
];
const DayDuration = [
  "",
  "8:00",
  "8:40",
  "8:50",
  "9:30",
  "9:40",
  "10:20",
  "10:25",
  "11:05",
  "11:10",
  "11:50",
  "12:10",
  "12:50",
  "13:10",
  "13:50",
  "14:10",
  "14:50",
  "14:55",
  "15:35",
  "15:45",
  "16:25",
];
const weedDay = ["пн", "вт", "ср", "чт", "пт"];
const Day = ({ day, weekDay, classId, }) => {
  console.log(day);
  return (
    <tr>
      <td
        className="day"
        style={{
          color: "black",
        }}
      >
        {weedDay[weekDay]}
      </td>
      <td
        className="day"
        style={{
          backgroundColor: colorId[day[0].id],
        }}
      >
        <div>{lessonsId[day[0].id]}</div>
        <div>{day[0].classroomids}</div>
      </td>

      <td
        className="day"
        style={{
          backgroundColor: colorId[day[1].id],
        }}
      >
        <div>{lessonsId[day[1].id]}</div>
        <div>{day[1].classroomids}</div>
      </td>
      <td
        className="day"
        style={{
          backgroundColor: colorId[day[2].id],
        }}
      >
        <div>{lessonsId[day[2].id]}</div>
        <div>{day[2].classroomids}</div>
      </td>
      <td
        className="day"
        style={{
          backgroundColor: colorId[day[3].id],
        }}
      >
        <div>{lessonsId[day[3].id]}</div>
        <div>{day[3].classroomids}</div>
      </td>
      <td
        className="day"
        style={{
          backgroundColor: colorId[day[4].id],
        }}
      >
        <div>{lessonsId[day[4].id]}</div>
        <div>{day[4].classroomids}</div>
      </td>
      <td
        className="day"
        style={{
          backgroundColor: colorId[day[5].id],
        }}
      >
        <div>{lessonsId[day[5].id]}</div>
        <div>{day[5].classroomids}</div>
      </td>
      <td
        className="day"
        style={{
          backgroundColor: colorId[day[6].id],
        }}
      >
        <div>{lessonsId[day[6].id]}</div>
        <div>{day[6].classroomids}</div>
      </td>
      <td
        className="day"
        style={{
          backgroundColor: colorId[day[7].id],
        }}
      >
        <div>{lessonsId[day[7].id]}</div>
        <div>{day[7].classroomids}</div>
      </td>
      <td
        className="day"
        style={{
          backgroundColor: colorId[day[8].id],
        }}
      >
        <div>{lessonsId[day[8].id]}</div>
        <div>{day[8].classroomids}</div>
      </td>
      <td
        className="day"
        style={{
          backgroundColor: colorId[day[9].id],
        }}
      >
        <div>{lessonsId[day[9].id]}</div>
        <div>{day[9].classroomids}</div>
      </td>
    </tr>
  );
};

const Schedule = ({ lessons, classId }) => {
  const [dayLessons1, dayLessons2, dayLessons3, dayLessons4, dayLessons5] =
    lessons;

  return (
    <table style={{ color: "white" }}>
      <tr
        className="day"
        style={{
          color: "black",
        }}
      >
        <td>
          class:
          <div>{parseInt(classId)}</div>
        </td>
        <td>
          <div>{DayDuration[1]}</div>
          <div>{DayDuration[2]}</div>
        </td>
        <td>
          <div>{DayDuration[3]}</div>
          <div>{DayDuration[4]}</div>
        </td>
        <td>
          <div>{DayDuration[5]}</div>
          <div>{DayDuration[6]}</div>
        </td>
        <td>
          <div>{DayDuration[7]}</div>
          <div>{DayDuration[8]}</div>
        </td>
        <td>
          <div>{DayDuration[9]}</div>
          <div>{DayDuration[10]}</div>
        </td>
        <td>
          <div>{DayDuration[11]}</div>
          <div>{DayDuration[12]}</div>
        </td>
        <td>
          <div>{DayDuration[13]}</div>
          <div>{DayDuration[14]}</div>
        </td>
        <td>
          <div>{DayDuration[15]}</div>
          <div>{DayDuration[16]}</div>
        </td>
        <td>
          <div>{DayDuration[17]}</div>
          <div>{DayDuration[18]}</div>
        </td>
        <td>
          <div>{DayDuration[19]}</div>
          <div>{DayDuration[20]}</div>
        </td>
      </tr>

      <Day day={dayLessons1} weekDay={0} />
      <Day day={dayLessons2} weekDay={1} />
      <Day day={dayLessons3} weekDay={2} />
      <Day day={dayLessons4} weekDay={3} />
      <Day day={dayLessons5} weekDay={4} />
    </table>
  );
};

export default Schedule;
