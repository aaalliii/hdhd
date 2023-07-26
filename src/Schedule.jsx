import React from "react";

const lessonsId = ["ruso", "ingles", "matematicas", "fisica", "literatura"];

const Week = ({ week }) => {
  //console.log(week);
  return (
    <tr style={{ textAlign: "center", fontSize: "20px" }}>
      <td
        style={{
          backgroundColor: week[parseInt(0)][0].color,
          width: "200px",
          height: "200px",
        }}
      >
        {lessonsId[week[0][0].id]}
      </td>
      <td
        style={{
          backgroundColor: week[0][1].color,
          width: "200px",
          height: "200px",
        }}
      >
        {lessonsId[week[0][1].id]}
      </td>
      <td
        style={{
          backgroundColor: week[0][2].color,
          width: "200px",
          height: "200px",
        }}
      >
        {lessonsId[week[0][2].id]}
      </td>
      <td
        style={{
          backgroundColor: week[0][3].color,
          width: "200px",
          height: "200px",
        }}
      >
        {lessonsId[week[0][3].id]}
      </td>
      <td
        style={{
          backgroundColor: week[0][4].color,
          width: "200px",
          height: "200px",
        }}
      >
        {lessonsId[week[0][4].id]}
      </td>
    </tr>
  );
};

const Schedule = ({ lessons }, { weekNumero }) => {
  const [week1, week2, week3, week4] = lessons;

  return (
    <table style={{ color: "white" }}>
      <Week week={week1} />
      <Week week={week2} />
      <Week week={week3} />
      <Week week={week4} />
    </table>
  );
};

export default Schedule;
