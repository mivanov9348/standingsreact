import { useEffect, useState } from "react";
import leaguesData from "../data/leagues.json";
import "./Standings.css";

function Standings({ teams }) {
  return (
    <div className="standings-container">
      <table>
        <thead>
          <tr>
            <th>P</th>
            <th>Team</th>
            <th>M</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GS</th>
            <th>GC</th>
            <th>GD</th>
            <th>P</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{team.name}</td>
              <td>{team.matches}</td>
              <td>{team.wins}</td>
              <td>{team.draws}</td>
              <td>{team.losses}</td>
              <td>{team.goalsScored}</td>
              <td>{team.goalsConceded}</td>
              <td>{team.goalDifference}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Standings;
