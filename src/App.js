import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import DeleteProduct from "./pages/DeleteProduct";
import SeasonTotals from "./pages/SeasonTotals";
import TopTenProducts from "./pages/TopTenProducts";
import RatingFilter from "./pages/RatingFilter";

function App() {
  return (
    <Router>
      <header className="header">
        <h1>Fashion Shop Frontend</h1>

        <nav className="navbar">
          <ul>
            <li>
              <Link to="/add">Add Product</Link>
            </li>
            <li>
              <Link to="/update">Update Product</Link>
            </li>
            <li>
              <Link to="/delete">Delete Product</Link>
            </li>
            <li>
              <Link to="/totals">Season Totals</Link>
            </li>
            <li>
              <Link to="/top10">Top 10 Products</Link>
            </li>
            <li>
              <Link to="/rating">Rating Filter</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
          <Route path="/delete" element={<DeleteProduct />} />
          <Route path="/totals" element={<SeasonTotals />} />
          <Route path="/top10" element={<TopTenProducts />} />
          <Route path="/rating" element={<RatingFilter />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
