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
    <div style={styles.container}>

      {/* Login Box */}
      <div style={styles.card}>
        <h1>Loan Officer Login</h1>

        <input
          placeholder="Enter passcode"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleLogin} style={styles.button}>
          Enter
        </button>
      </div>

      {/* Lecturer Note */}
      <div style={styles.lecturerNote}>
        <h3>📌 Lecturer Demo Instructions</h3>

        <p>
          This is a controlled prototype environment for <b>UJIMA AI</b>.
        </p>

        <p>
          To access the Loan Officer Dashboard, use the predefined demo passcode[UJIMA2026].
        </p>

        <p style={{ fontSize: 12, color: "#aaa" }}>
          Note: Authentication is simulated for demonstration purposes only.
        </p>
      </div>

    </div>
  );
}

/* STYLES */
const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f0f0f",
    color: "white",
    fontFamily: "Arial",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px"
  },

  card: {
    background: "#1a1a1a",
    padding: 30,
    borderRadius: 12,
    border: "1px solid #333",
    width: 300
  },

  input: {
    width: "100%",
    padding: 12,
    marginTop: 15,
    borderRadius: 8,
    border: "1px solid #444",
    background: "#111",
    color: "white"
  },

  button: {
    width: "100%",
    marginTop: 15,
    padding: 12,
    borderRadius: 8,
    border: "none",
    background: "#16a085",
    color: "white",
    cursor: "pointer"
  },

  lecturerNote: {
    width: 300,
    background: "#111",
    border: "1px solid #333",
    padding: 15,
    borderRadius: 10,
    color: "#ddd"
  }
};