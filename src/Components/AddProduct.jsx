import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://127.0.0.1:8000/api/apiProducts";

function AddProduct() {
  const navigate = useNavigate();

  const save = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("description", e.target.description.value);
    formData.append("price", parseInt(e.target.price.value));
    formData.append("type", e.target.type.value);
    formData.append("CatID", parseInt(e.target.CatID.value));
    formData.append("pdDate", e.target.pdDate.value);
    formData.append("picture", e.target.picture.files[0]);

    axios.post(API, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then(() => {
      navigate("/products");
    }).catch(() => {
      alert("Validation error from backend");
    });
  };

  return (
<form
  onSubmit={save}
  encType="multipart/form-data"
  className="form-card"
>
  <h2>Add Product</h2>

  <div className="form-group">
    <label>Name</label>
    <input name="name" required />
  </div>

  <div className="form-group">
    <label>Description</label>
    <input name="description" required />
  </div>

  <div className="form-group">
    <label>Price</label>
    <input type="number" name="price" min="1" required />
  </div>

  <div className="form-group">
    <label>Type</label>
    <select name="type" required>
      <option value="">-- Select type --</option>
      <option value="unit">Unit</option>
      <option value="weight">Weight</option>
    </select>
  </div>

  <div className="form-group">
    <label>Category</label>
    <select name="CatID" required>
      <option value="">-- Select category --</option>
      <option value="1">Electronics</option>
      <option value="2">Food</option>
      <option value="3">Clothing</option>
    </select>
  </div>

  <div className="form-group">
    <label>Date</label>
    <input type="date" name="pdDate" required />
  </div>

  <div className="form-group">
    <label>Picture</label>
    <input type="file" name="picture" required />
  </div>

  <button className="btn">Save</button>
</form>

  );
}

export default AddProduct;
