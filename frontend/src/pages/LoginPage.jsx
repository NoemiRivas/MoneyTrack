import { useState, useContext } from "react";
import { AppContext } from "../context/ContextApp";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password, navigate);
      dispatch({ type: "SET_USER", payload: response.data.user });
    } catch (err) {
      setError(err.response?.data?.message || "Error en el inicio de sesión.");
    }
  };

  return (
    <form onSubmit={handleLogin} className="mt-24">
      <h2>Login</h2>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}