import "./Fixtures.css";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Fixtures({ teams }) {
  const shuffledTeams = shuffleArray([...teams]);
  const fixtures = [];

  for (let i = 0; i < shuffledTeams.length; i += 2) {
    if (shuffledTeams[i + 1]) {
      fixtures.push(
        <tr key={i}>
          <td>{shuffledTeams[i]}</td>
          <td>-</td>
          <td>{shuffledTeams[i + 1]}</td>
        </tr>
      );
    }
  }

  return (
    <div className="fixtures-container">
      {fixtures.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Team 1</th>
              <th></th>
              <th>Team 2</th>
            </tr>
          </thead>
          <tbody>{fixtures}</tbody>
        </table>
      ) : (
        <p>No fixtures available</p>
      )}
    </div>
  );
}

export default Fixtures;
