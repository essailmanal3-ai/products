import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';

function DeleteProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.delete(`http://127.0.0.1:8000/api/apiProducts/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then(() => navigate('/products'))
      .catch(() => navigate('/products'));
  }, [id, navigate]);

  return null;
}

export default DeleteProduct;
