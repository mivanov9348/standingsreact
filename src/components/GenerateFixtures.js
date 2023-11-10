export default function generateFixtures(teams) {
  if (teams.length < 2) {
    throw new Error("At least two teams are required to generate fixtures.");
  }

  const fixtures = [];
  let fixtureId = 0;
  const totalTeams = teams.length;
  const totalRounds = totalTeams - 1;
  const matchesPerRound = Math.floor(totalTeams / 2);

  for (let round = 0; round < totalRounds; round++) {
    for (let match = 0; match < matchesPerRound; match++) {
      const home = teams[match];
      const awayIndex = (totalTeams - 1 - match + round) % totalTeams;
      const away = teams[awayIndex === match ? totalTeams - 1 : awayIndex];

      fixtures.push({
        id: fixtureId,
        round: round + 1,
        homeTeam: home.name,
        homeTeamId: home.id,
        awayTeam: away.name,
        awayTeamId: away.id,
        homeTeamGoal: "TBD", // Placeholder for goals
        awayTeamGoal: "TBD", // Placeholder for goals
      });
      fixtureId++;
    }

    // Rotate the array to get new fixtures for the next round, keeping the first element fixed
    teams.splice(1, 0, teams.pop());
  }

  return fixtures;
}
