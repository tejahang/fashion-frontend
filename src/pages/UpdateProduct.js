import axios from "axios";
import { useState } from "react";

function UpdateProduct() {
  const [formData, setFormData] = useState({
    productName: "",
    unitsSold: "",
    returns: "",
    revenue: "",
    customerRating: "",
    stockLevel: "",
    season: "",
    trendScore: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // CRITICAL: Map the React state (camelCase) to the Backend Schema keys (Title Case with Spaces)
    const backendData = {
      "Product Name": formData.productName,
      "Units Sold": Number(formData.unitsSold), // Convert string to Number
      Returns: Number(formData.returns), // Convert string to Number
      Revenue: Number(formData.revenue), // Convert string to Number
      "Customer Rating": Number(formData.customerRating), // Convert string to Number
      "Stock Level": Number(formData.stockLevel), // Convert string to Number
      Season: formData.season,
      "Trend Score": Number(formData.trendScore), // Convert string to Number
    };

    try {
      const response = await axios.post(
        "http://localhost:5500/api/updateproduct",
        backendData
      );
      alert("Product updated successfully!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      console.log(error);
      alert("Error updating product");
    }
  }

  return (
    <div>
      <h2>Update Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="productName"
          placeholder="Product Name (to update)"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="unitsSold"
          placeholder="Units Sold"
          onChange={handleChange}
        />

        <input
          type="number"
          name="returns"
          placeholder="Returns"
          onChange={handleChange}
        />

        <input
          type="number"
          name="revenue"
          placeholder="Revenue"
          onChange={handleChange}
        />

        <input
          type="number"
          name="customerRating"
          placeholder="Customer Rating"
          onChange={handleChange}
        />

        <input
          type="number"
          name="stockLevel"
          placeholder="Stock Level"
          onChange={handleChange}
        />

        <input
          type="text"
          name="season"
          placeholder="Season"
          onChange={handleChange}
        />

        <input
          type="number"
          name="trendScore"
          placeholder="Trend Score"
          onChange={handleChange}
        />

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
