import { useNavigate } from "react-router-dom";

export default function Scout() {
  const navigate = useNavigate();

  const application = JSON.parse(localStorage.getItem("application"));

  if (!application) {
    return (
      <div style={styles.container}>
        <h2>No application found</h2>
      </div>
    );
  }

  const loan = Number(application.loanAmount) || 0;
  const income = Number(application.income) || 0;

  // 🧠 Scout Intelligence Layer (pre-analysis)
  const signals = [];

  if (loan > 15000) signals.push("High loan request detected");
  if (loan > income * 2) signals.push("Loan exceeds income safety ratio");
  if (application.loanSharkFlag) signals.push("Financial distress indicator present");
  if (application.childrenUnder5) signals.push("Household dependency factor present");
  if (income > 0 && loan < income) signals.push("Stable repayment range detected");

  let profile = "STANDARD";
  let riskHint = "LOW";

  if (signals.length >= 3) {
    profile = "HIGH RISK PROFILE";
    riskHint = "HIGH";
  } else if (signals.length === 2) {
    profile = "MODERATE RISK PROFILE";
    riskHint = "MEDIUM";
  }

  const proceed = () => {
   setTimeout(() => {
  alert("Application submitted successfully. A loan officer will review your application.");
  navigate("/");
}, 1500); ;
  };

  return (
    <div style={styles.container}>
      <h1 style={{ color: "#16a085" }}>Scout Agent</h1>

      <p style={{ color: "#aaa" }}>
        Pre-processing layer analyzing applicant financial signals before risk evaluation.
      </p>

      {/* Applicant Summary */}
      <div style={styles.card}>
        <h2>Raw Application Data</h2>
        <p><b>Name:</b> {application.name}</p>
        <p><b>Occupation:</b> {application.occupation}</p>
        <p><b>County:</b> {application.county}</p>
        <p><b>Loan:</b> KES {loan}</p>
        <p><b>Income:</b> KES {income}</p>
      </div>

      {/* Signal Extraction */}
      <div style={styles.card}>
        <h2>Signal Extraction Engine</h2>

        {signals.length === 0 ? (
          <p>No risk signals detected in initial scan.</p>
        ) : (
          signals.map((s, i) => <p key={i}>• {s}</p>)
        )}
      </div>

      {/* Profile Classification */}
      <div style={styles.card}>
        <h2>Preliminary Classification</h2>

        <p>
          <b>Profile:</b> {profile}
        </p>

        <p>
          <b>Risk Hint:</b>{" "}
          <span style={{ color: riskHint === "HIGH" ? "#e74c3c" : "#f39c12" }}>
            {riskHint}
          </span>
        </p>
      </div>

      {/* Action */}
      <button onClick={proceed} style={styles.button}>
        Forward to Guardian →
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: 30,
    fontFamily: "Arial",
    background: "#0f0f0f",
    minHeight: "100vh",
    color: "white"
  },

  card: {
    background: "#1a1a1a",
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
    border: "1px solid #333"
  },

  button: {
    width: "100%",
    marginTop: 25,
    padding: 15,
    borderRadius: 10,
    border: "none",
    background: "#16a085",
    color: "white",
    fontSize: 16,
    cursor: "pointer"
  }
}