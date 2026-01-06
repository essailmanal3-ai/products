import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://127.0.0.1:8000/api/login";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    axios.post(API, { email, password })
      .then(res => {
        localStorage.setItem("token", res.data.token);

        axios.defaults.headers.common["Authorization"] =
          `Bearer ${res.data.token}`;

        navigate("/products");
      })
      .catch(() => {
        alert("Login failed");
      });
  };

  return (
    <form onSubmit={login}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      /><br />

      <button>Login</button>
    </form>
  );
}

export default Login;
