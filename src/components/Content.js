import { useEffect, useReducer, useState } from "react";
import "../App.css";
import Standings from "./Standings";
import Fixtures from "./Fixtures";
import leaguesData from "../data/leagues.json";
import generateFixtures from "./GenerateFixtures";

const fixturesReducer = (state, action) => {
  switch (action.type) {
    case "updateGoals":
      const fixture = state.find((x) => x.id === action.payload.fixtureId);

      const isHomeTeam = fixture.homeTeamId === action.payload.teamId;

      const otherTeamId = isHomeTeam ? fixture.awayTeamId : fixture.homeTeamId;

      otherTeamId.goalScored += action.payload.value;

      return state;

    case "setFixtures":
      return action.fixtures;
    default:
      return state;
  }
};

function Content() {
  const [active, setActive] = useState(true);
  const [teams, setTeams] = useState([]);
  const [state, dispatch] = useReducer(fixturesReducer, []);

  useEffect(function () {
    setTeams(leaguesData.leagues[0].teams);
  }, []);

  useEffect(() => {
    if (teams.length > 0) {
      try {
        const generatedFixtures = generateFixtures(teams);
        dispatch({ type: "setFixtures", fixtures: generatedFixtures });
      } catch (error) {
        console.error("Error generating fixtures:", error);
      }
    }
  }, [teams]);

  const handleFixtureChange = (fixtureId, teamId, value) => {
    dispatch({ type: "updateGoals", payload: { fixtureId, teamId, value } });
  };

  return (
    <div className="content-container">
      <div className="tabs">
        <div className="tab-standings" onClick={() => setActive(true)}>
          <h2 style={{ color: active ? "red" : null }}>Standings</h2>
        </div>
      </div>

      {active && (
        <div className="fixtures-standings">
          <Fixtures fixtures={state} onChange={handleFixtureChange} />
          <Standings teams={teams} />
        </div>
      )}
    </div>
  );
}

export default Content;
