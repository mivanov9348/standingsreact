import "./Fixtures.css";
function Fixtures({ fixtures, onChange }) {
  return (
    <div className="fixtures-container">
      <table>
        <thead>
          <tr>
            <th>R</th>
            <th>HT</th>
            <th>HG</th>
            <th>AG</th>
            <th>AT</th>
          </tr>
        </thead>
        <tbody>
          {fixtures.map((fixture, index) => (
            <tr key={index}>
              <td>{fixture.round}</td>
              <td>{fixture.homeTeam}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max="20"
                  value={fixture.homeGoal}
                  onChange={(e) =>
                    onChange(
                      fixture.id,
                      fixture.homeTeam.id,
                      parseInt(e.target.value)
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  max="20"
                  value={fixture.awayGoal}
                  onChange={(e) =>
                    onChange(
                      fixture.id,
                      fixture.awayTeam.id,
                      parseInt(e.target.value)
                    )
                  }
                />
              </td>
              <td>{fixture.awayTeam}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Fixtures;
