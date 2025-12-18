// import axios from "axios";
// import { useState } from "react";

// function AddProduct() {
//   const [formData, setFormData] = useState({
//     productCategory: "",
//     productName: "",
//     unitsSold: "",
//     returns: "",
//     revenue: "",
//     customerRating: "",
//     stockLevel: "",
//     season: "",
//     trendScore: "",
//   });

//   function handleChange(e) {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:6000/api/addproduct",
//         formData
//       );
//       alert("Product added successfully!");
//       console.log(response.data);
//       setFormData({
//         productCategory: "",
//         productName: "",
//         unitsSold: "",
//         returns: "",
//         revenue: "",
//         customerRating: "",
//         stockLevel: "",
//         season: "",
//         trendScore: "",
//       });
//     } catch (error) {
//       console.error(error);
//       alert("Error adding product");
//     }
//   }
//   return (
//     <div>
//       <h2>Add Product</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="productCategory"
//           placeholder="Product Category"
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="productName"
//           placeholder="Product Name"
//           onChange={handleChange}
//         />

//         <input
//           type="number"
//           name="unitsSold"
//           placeholder="Units Sold"
//           onChange={handleChange}
//         />

//         <input
//           type="number"
//           name="returns"
//           placeholder="Returns"
//           onChange={handleChange}
//         />

//         <input
//           type="number"
//           name="revenue"
//           placeholder="Revenue"
//           onChange={handleChange}
//         />

//         <input
//           type="number"
//           name="customerRating"
//           placeholder="Customer Rating"
//           onChange={handleChange}
//         />

//         <input
//           type="number"
//           name="stockLevel"
//           placeholder="Stock Level"
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="season"
//           placeholder="Season"
//           onChange={handleChange}
//         />

//         <input
//           type="number"
//           name="trendScore"
//           placeholder="Trend Score"
//           onChange={handleChange}
//         />

//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// }

// export default AddProduct;

import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  // State to hold form data
  const [formData, setFormData] = useState({
    productCategory: "",
    productName: "",
    unitsSold: "",
    returns: "",
    revenue: "",
    customerRating: "",
    stockLevel: "",
    season: "",
    trendScore: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // CRITICAL: Map the React state (camelCase) to the Backend Schema keys (Title Case with Spaces)
    const backendData = {
      "Product Category": formData.productCategory,
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
      // Make sure the port matches your server.js (default is 5000)
      const response = await axios.post(
        "http://localhost:5500/api/addproduct",
        backendData
      );

      alert("Product added successfully!");
      console.log("Server Response:", response.data);

      // Reset form after successful submission
      setFormData({
        productCategory: "",
        productName: "",
        unitsSold: "",
        returns: "",
        revenue: "",
        customerRating: "",
        stockLevel: "",
        season: "",
        trendScore: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product. Check console for details.");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h2>Add New Product</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          name="productCategory"
          value={formData.productCategory}
          placeholder="Product Category (e.g. Tops)"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="productName"
          value={formData.productName}
          placeholder="Product Name"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="unitsSold"
          value={formData.unitsSold}
          placeholder="Units Sold"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="returns"
          value={formData.returns}
          placeholder="Returns"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="revenue"
          value={formData.revenue}
          placeholder="Revenue (e.g. 1500.50)"
          onChange={handleChange}
          step="0.01"
          required
        />

        <input
          type="number"
          name="customerRating"
          value={formData.customerRating}
          placeholder="Customer Rating (0-5)"
          onChange={handleChange}
          step="0.1"
          required
        />

        <input
          type="number"
          name="stockLevel"
          value={formData.stockLevel}
          placeholder="Stock Level"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="season"
          value={formData.season}
          placeholder="Season (e.g. Summer)"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="trendScore"
          value={formData.trendScore}
          placeholder="Trend Score"
          onChange={handleChange}
          step="0.01"
          required
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            cursor: "pointer",
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
