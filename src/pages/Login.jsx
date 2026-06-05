import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  const handleLogin = () => {
    if (code === "UJIMA2026") {
      localStorage.setItem("officer", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid passcode");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Loan Officer Login</h1>

      <input
        placeholder="Enter passcode"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button onClick={handleLogin} style={{ marginLeft: 10 }}>
        Enter
      </button>
    </div>
  );
}