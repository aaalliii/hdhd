import React from "react";

const lessonsId = ["ruso", "ingles", "matematicas", "fisica", "literatura"];

const Week = ({ week }) => {
  console.log(week);
  return (
    <tr>
      <td
        style={{
          backgroundColor: "#414C6B",
          width: "200px",
          height: "200px",
        }}
      >
        {week[0][0].color}
      </td>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
  );
};

const Schedule = ({ lessons }) => {
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
