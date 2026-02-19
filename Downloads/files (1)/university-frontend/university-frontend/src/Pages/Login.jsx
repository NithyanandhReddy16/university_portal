import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../api";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }
    setLoading(true);
    try {
      const res = await loginUser({ email, password });
      const { token, role } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      if (role === "STUDENT") navigate("/student");
      else if (role === "FACULTY") navigate("/faculty");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login 🔐</h2>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        />
        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "#007bff", fontWeight: "bold" }}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
