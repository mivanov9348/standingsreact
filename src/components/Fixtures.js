import "./Fixtures.css";

export default function Fixtures({ fixtures }) {
  return (
    <div className="fixtures-container">
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Home Team</th>
            <th>Home Goals</th>
            <th>Away Goals</th>
            <th>Away Team</th>
          </tr>
        </thead>
        <tbody>
          {fixtures.map((fixture, index) => (
            <tr key={index}>
              <td>{fixture.round}</td>
              <td>{fixture.homeTeam}</td>
              <td>
                <input type="number" min="0" max="20" />
              </td>
              <td>
                <input type="number" min="0" max="20" />
              </td>
              <td>{fixture.awayTeam}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
