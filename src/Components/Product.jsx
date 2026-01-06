import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API = "http://127.0.0.1:8000/api/apiProducts";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`${API}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => {
      setProduct(res.data.product);
    });
  }, [id]);

  if (!product) return <p></p>;

  return (
    <div>
      <h2>Product Details</h2>

      <ul>
        <li>ID: {product.id}</li>
        <li>Name: {product.name}</li>
        <li>Description: {product.description}</li>
        <li>Price: {product.price}</li>
        <li>Type: {product.type}</li>
        <li>Category: {product.category}</li>
        <li>Date: {product.date}</li>
      </ul>

      <Link to="/products">Back</Link>
    </div>
  );
}

export default Product;
