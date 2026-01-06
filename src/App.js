import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Product from "./Components/Product";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";
import DeleteProduct from "./Components/DeleteProduct";
import NoMatch from "./Components/NoMatch";
import Login from "./Components/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/show/:id" element={<Product />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
        <Route path="/product/delete/:id" element={<DeleteProduct />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
