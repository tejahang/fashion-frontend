import axios from "axios";
import { useState } from "react";

function DeleteProduct() {
  const [productName, setProductName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    // const productName = {""}

    try {
      const response = await axios.post(
        "http://localhost:5500/api/deleteproduct",
        {
          "Product Name": productName,
        }
      );

      alert("Product deleted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Error deleting product");
    }
  }

  return (
    <div>
      <h2>Delete Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name to delete"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />

        <button type="submit">Delete Product</button>
      </form>
    </div>
  );
}

export default DeleteProduct;
