import { useState } from "react";
import axios from "axios";

function SeasonTotals() {
  const [season, setSeason] = useState("");
  const [result, setResult] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:5500/api/seasontotals/${season}`
      );

      setResult(response.data[0]);
    } catch (error) {
      console.error(error);
      alert("Error fetching season totals");
    }
  }

  return (
    <div>
      <h2>Season Totals</h2>

      <form onSubmit={handleSubmit}>
        <select
          value={season}
          onChange={(e) => setSeason(e.target.value)}
          required
        >
          <option value="">Select Season</option>
          <option value="Winter">Winter</option>
          <option value="Summer">Summer</option>
          <option value="Spring">Spring</option>
          <option value="Autumn">Autumn</option>
        </select>

        <button type="submit">Get Totals</button>
      </form>

      {result && (
        <div>
          <h3>Results:</h3>
          <p>Total Units Sold: {result.totalUnitsSold}</p>
          <p>Total Returns: {result.totalReturns}</p>
          <p>Total Revenue: {result.totalRevenue}</p>
        </div>
      )}
    </div>
  );
}

export default SeasonTotals;
