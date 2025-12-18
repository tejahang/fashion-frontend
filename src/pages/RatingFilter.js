import { useState } from "react";
import axios from "axios";

function RatingFilter() {
  const [season, setSeason] = useState("");
  const [rating, setRating] = useState("");
  const [products, setProducts] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:5500/api/highrated", {
        params: {
          season,
          minRating: rating,
        },
      });

      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
      alert("Error fetching products by rating");
    }
  }

  return (
    <div>
      <h2>Products by Customer Rating</h2>

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
          step="0.1"
          placeholder="Minimum Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />

        <button type="submit">Search</button>
      </form>

      {products.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>Category</th>
              <th>Name</th>
              <th>Rating</th>
              {/* <th>Revenue</th> */}
              <th>Season</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                {/* FIX 4: Access properties using the exact keys from the DB */}
                <td>{item["Product Category"]}</td>
                <td>{item["Product Name"]}</td>
                <td>{item["Customer Rating"]}</td>
                {/* <td>£{item["Revenue"]?.toFixed(2)}</td> */}
                <td>{item["Season"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RatingFilter;
