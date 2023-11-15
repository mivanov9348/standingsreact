import { useEffect, useState } from "react";
import "./NewLeague.css";
import Button from "./utils/Button";
import Input from "./utils/Input";
import GroupStandings from "./GroupStandings";

function NewLeague() {
  const [competitionType, setCompetitionType] = useState("");
  const [teamsCount, setTeamsCount] = useState(0);
  const [groupsCount, setGroupsCount] = useState(0);
  const [teamsPerGroup, setTeamsPerGroup] = useState(0);
  const [teamNames, setTeamNames] = useState([]);
  const [isGenerated, setIsGenerated] = useState(false);

  useEffect(
    function () {
      const teams = groupsCount * teamsPerGroup;
      setTeamsCount(teams);
    },
    [groupsCount, setGroupsCount, teamsPerGroup, setTeamsPerGroup]
  );

  useEffect(() => {
    setTeamNames(Array(teamsCount).fill(""));
  }, [teamsCount]);

  function handleTeamNameChange(name, index) {
    const updatedTeamNames = [...teamNames];
    updatedTeamNames[index] = name !== "" ? name : "TBD";
    setTeamNames(updatedTeamNames);
  }

  return (
    <div>
      <div className="newleague-container">
        <h2>Create New League</h2>
        <hr></hr>
        <select onChange={(e) => setCompetitionType(e.target.value)}>
          <option>Type</option>
          <option value="league">League</option>
          <option value="knockouts">Knockout Stage</option>
        </select>
      </div>
      <div className="choices-container">
        {competitionType === "league" && (
          <div>
            <League
              teamsCount={teamsCount}
              setGroupsCount={setGroupsCount}
              setTeamsPerGroup={setTeamsPerGroup}
            />
            <TeamsInputs
              teamsCount={teamsCount}
              teamNames={teamNames}
              onTeamNameChange={handleTeamNameChange}
            />
            {teamsCount > 0 && (
              <div className="generateBtn">
                <Button onClick={() => setIsGenerated(true)}>
                  {"Generate League"}
                </Button>
              </div>
            )}
          </div>
        )}
        {competitionType === "knockouts" && (
          <div>
            <Knockouts teamsCount={teamsCount} />
            <TeamsInputs
              teamsCount={teamsCount}
              teamNames={teamNames}
              onTeamNameChange={handleTeamNameChange}
            />
            {teamsCount > 0 && (
              <div className="generateBtn">
                <Button>{"Generate"}</Button>
              </div>
            )}
          </div>
        )}

        {isGenerated && (
          <div>
            <GroupStandings
              teams={teamNames}
              groups={groupsCount}
              teamsPerGroup={teamsPerGroup}
            />
          </div>
        )}

        {console.log(isGenerated)}
      </div>
    </div>
  );
}

function Knockouts() {
  return (
    <div className="modify-container">
      <h1>Knockout Stage</h1>
      <hr />
      <NumberOfTeams type="knockouts" />
      <br />
    </div>
  );
}

function League({ teamsCount, setGroupsCount, setTeamsPerGroup }) {
  return (
    <div className="modify-container">
      <h1>League</h1>
      <hr />

      <select onChange={(e) => setGroupsCount(Number(e.target.value))}>
        <option value="0">Groups</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="16">16</option>
      </select>

      <select onChange={(e) => setTeamsPerGroup(Number(e.target.value))}>
        <option value="0">Teams Per Group</option>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="8">8</option>
        <option value="10">10</option>
        <option value="12">12</option>
        <option value="14">14</option>
        <option value="16">16</option>
        <option value="18">18</option>
        <option value="20">20</option>
      </select>

      <NumberOfTeams type="league" teamsCount={teamsCount} />
    </div>
  );
}

function NumberOfTeams({ type, teamsCount }) {
  return (
    <div>
      {type === "knockouts" && (
        <select>
          <option value="0">Teams</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="32">32</option>
          <option value="64">64</option>
        </select>
      )}

      {type === "league" && (
        <div className="leagueTeams">
          <p>Teams: {teamsCount}</p>
        </div>
      )}
    </div>
  );
}

function TeamsInputs({ teamsCount, teamNames, onTeamNameChange }) {
  return (
    <div className="teamsinput-container">
      {Array.from({ length: teamsCount }, (_, i) => (
        <Input
          key={i}
          type="text"
          placeholder={`Team: ${i + 1}`}
          value={teamNames[i]}
          onChange={(e) => onTeamNameChange(e.target.value, i)}
          style={{ textAlign: "center" }}
        />
      ))}
    </div>
  );
}

export default NewLeague;
