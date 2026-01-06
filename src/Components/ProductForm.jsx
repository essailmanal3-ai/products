// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function ProductForm() {
//   const navigate = useNavigate();

//   const saveProduct = (e) => {
//     e.preventDefault();

//     const data = {
//       name: e.target.name.value.trim(),
//       description: e.target.description.value.trim(),
//       pdDate: e.target.pdDate.value, // YYYY-MM-DD
//       type: e.target.type.value.trim(),
//       price: Number(e.target.price.value),
//       CatID: Number(e.target.CatID.value)
//     };

//     axios
//       .post('http://127.0.0.1:8000/api/apiProducts', data)
//       .then(() => navigate('/products'))
//       .catch(err => console.error(err.response.data));
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Add Product</h2>

//       <form onSubmit={saveProduct}>
//         <input name="name" placeholder="Name" required /><br/>
//         <input name="description" placeholder="Description" required /><br/>
//         <input type="date" name="pdDate" required /><br/>
//         <input name="type" placeholder="Type" required /><br/>
//         <input type="number" name="price" placeholder="Price" required /><br/>
//         <input name="CatID" placeholder="Category ID" required /><br/>
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// }

// export default ProductForm;
