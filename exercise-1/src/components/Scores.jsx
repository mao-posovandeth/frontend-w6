import React from "react";
import Statistic from "./Statistic";

function ScoreRow({ result }) {
  const { firstName, lastName, score } = result;
  const scoreClass = score < 50 ? "warning" : "";

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td className={scoreClass}>{score}</td>
    </tr>
  );
}

export default function Scores({ courseName, courseResults }) {
  return (
    <div className="scores">
      <h1>{courseName}</h1>

      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {courseResults.map((r, i) => (
            <ScoreRow key={i} result={r} />
          ))}
        </tbody>
      </table>

      <Statistic results={courseResults} />
    </div>
  );
}
