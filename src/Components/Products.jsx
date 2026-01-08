import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductPDF from "./ProductPDF";
import Geo from "./Geo";

const API = "http://127.0.0.1:8000/api/apiProducts";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(API, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  const logout = () => {
    axios.post("http://127.0.0.1:8000/api/logout", {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then(() => {
      localStorage.removeItem("token");
      window.location.href = "/";
    });
  };

  return (
    <div>
      <h2 className="products-title" >Products</h2>

      <button onClick={logout}>Logout</button><br /><br />

      <Link to="/product/add">
        <img src="addproduct.png" width="30" alt="addproduct" />
      </Link><br />

      <table   className="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Type</th>
            <th>Category</th>
            <th>Date</th>
            <th>Show</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>PDF</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>{p.price}</td>
              <td>{p.type}</td>
              <td>{p.category}</td>
              <td>{p.date}</td>

              <td>
                <Link to={`/product/show/${p.id}`}>
                  <img src="show.png" width="30" alt="show" />
                </Link>
              </td>
              <td>
                <Link to={`/product/edit/${p.id}`}>
                  <img src="edit.png" width="30" alt="edit" />
                </Link>
              </td>
              <td>
                <Link to={`/product/delete/${p.id}`}>
                  <img src="delete.png" width="30" alt="delete" />
                </Link>
              </td>
                <td>
                <ProductPDF product={p} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Geo />

    </div>
  );
}

export default Products;
