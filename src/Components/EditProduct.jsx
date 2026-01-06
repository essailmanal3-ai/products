import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = "http://127.0.0.1:8000/api/apiProducts";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const update = (e) => {
    e.preventDefault();
    axios.put(`${API}/${id}`, product, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then(() => {
      navigate("/products");
    });
  };

  if (!product) return <p>Loading...</p>;

  return (
    <form onSubmit={update} className="form">
  <h2>Edit Product</h2>

  <div className="form-group">
    <label>Name</label>
    <input
      value={product.name}
      onChange={(e) => setProduct({ ...product, name: e.target.value })}
    />
  </div>

  <div className="form-group">
    <label>Description</label>
    <input
      value={product.description}
      onChange={(e) =>
        setProduct({ ...product, description: e.target.value })
      }
    />
  </div>

  <div className="form-group">
    <label>Price</label>
    <input
      type="number"
      value={product.price}
      onChange={(e) =>
        setProduct({ ...product, price: e.target.value })
      }
    />
  </div>

  <div className="form-group">
    <label>Type</label>
    <select
      value={product.type}
      onChange={(e) =>
        setProduct({ ...product, type: e.target.value })
      }
    >
      <option value="">-- Select type --</option>
      <option value="unit">Unit</option>
      <option value="weight">Weight</option>
    </select>
  </div>

  <div className="form-group">
    <label>Category</label>
    <select
      value={product.CatID}
      onChange={(e) =>
        setProduct({ ...product, CatID: Number(e.target.value) })
      }
    >
      <option value="">-- Select category --</option>
      <option value="1">Electronics</option>
      <option value="2">Food</option>
      <option value="3">Clothing</option>
    </select>
  </div>

  <div className="form-group">
    <label>Date</label>
    <input
      type="date"
      value={product.pdDate}
      onChange={(e) =>
        setProduct({ ...product, pdDate: e.target.value })
      }
    />
  </div>

  <button className="btn">Update</button>
</form>


  );
}

export default EditProduct;
