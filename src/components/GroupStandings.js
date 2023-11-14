import React from "react";

function GroupStandings({ teams, groups, teamsPerGroup }) {
  // Function to shuffle the teams array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  // Shuffling the teams
  const shuffledTeams = shuffleArray([...teams]);

  // Function to split teams into groups
  const splitIntoGroups = (array, groups, teamsPerGroup) => {
    let result = [];
    for (let i = 0; i < groups; i++) {
      result.push(array.slice(i * teamsPerGroup, (i + 1) * teamsPerGroup));
    }

    return result;
  };

  // Splitting teams into groups
  const groupStandings = splitIntoGroups(shuffledTeams, groups, teamsPerGroup);

  return (
    <div>
      {groupStandings.map((group, index) => (
        <div key={index}>
          <h3>Group {index + 1}</h3>
          <ul>
            {group.map((team, idx) => (
              <li key={idx}>{team}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupStandings;
