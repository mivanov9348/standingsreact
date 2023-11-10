import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

function Stats() {
  const [data, setData] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("bul1");
  const [loading, setLoading] = useState(false);

  useEffect(function () {}, [selectedLeague]);

  return (
    <div className="standingsContainer">
      <div className="selectContainer">
        <select
          name="selectLeague"
          id="selectLeague"
          defaultValue={selectedLeague}
          onChange={(e) => setSelectedLeague(e.target.value)}
        >
          <option value="bul1">Bulgarian First League</option>
        </select>
      </div>
    </div>
  );
}

export default Stats;
