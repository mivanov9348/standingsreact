export default function CalculateStandings(
  teams,
  fixtureId,
  homeTeamId,
  awayTeamId,
  homeGoals,
  awayGoals
) {
  return teams.map((team) => {
    if (team.id === homeTeamId || team.id === awayTeamId) {
      let isHomeTeam = team.id === homeTeamId;
      let teamGoals = isHomeTeam ? homeGoals : awayGoals;
      let opponentGoals = isHomeTeam ? awayGoals : homeGoals;

      let updatedTeam = { ...team };
      updatedTeam.matches += 1;
      updatedTeam.goalsScored += teamGoals;
      updatedTeam.goalsConceded += opponentGoals;
      updatedTeam.goalDifference =
        updatedTeam.goalsScored - updatedTeam.goalsConceded;

      if (teamGoals > opponentGoals) {
        // Win
        updatedTeam.wins += 1;
        updatedTeam.points += 3;
      } else if (teamGoals === opponentGoals) {
        // Draw
        updatedTeam.draws += 1;
        updatedTeam.points += 1;
      } else {
        // Loss
        updatedTeam.losses += 1;
      }

      return updatedTeam;
    }
    return team;
  });
}
