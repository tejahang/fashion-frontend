import { useState } from "react";
import axios from "axios";

function TopTenProducts() {
  const [season, setSeason] = useState("");
  const [unitsSold, setUnitsSold] = useState("");
  const [products, setProducts] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:5500/api/topsales", {
        params: {
          season: season,
          minUnits: unitsSold,
        },
      });
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
      alert("Error fetching top products");
    }
  }

  return (
    <div>
      <h2>Top 10 Products</h2>

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

        <input
          type="number"
          placeholder="Minimum Units Sold"
          value={unitsSold}
          onChange={(e) => setUnitsSold(e.target.value)}
          required
        />

        <button type="submit">Get Products</button>
      </form>

      {products.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>Category</th>
              <th>Name</th>
              <th>Units Sold</th>
              <th>Revenue</th>
              <th>Season</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                {/* FIX 4: Access properties using the exact keys from the DB */}
                <td>{item["Product Category"]}</td>
                <td>{item["Product Name"]}</td>
                <td>{item["Units Sold"]}</td>
                <td>£{item["Revenue"]?.toFixed(2)}</td>
                <td>{item["Season"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TopTenProducts;
