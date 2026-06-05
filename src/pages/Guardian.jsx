import { useNavigate } from "react-router-dom";

export default function Guardian() {

  const isOfficer = localStorage.getItem("officer");

  const navigate = useNavigate();

  const application = JSON.parse(localStorage.getItem("application"));

  // 🔒 Access control AFTER hooks
  if (!isOfficer) {
    return <h2 style={{ padding: 20 }}>Access Denied: Officer Login Required</h2>;
  }

  if (!application) {
    return <h2 style={{ padding: 20 }}>No application found</h2>;
  }

  const loan = Number(application.loanAmount) || 0;
  const income = Number(application.income) || 0;

  // 🧠 Risk Engine
  let score = 40;
  let reasons = [];

  if (loan > 15000) {
    score += 20;
    reasons.push("High loan request");
  }

  if (application.loanSharkFlag) {
    score += 20;
    reasons.push("Financial distress signal");
  }

  if (application.childrenUnder5) {
    score += 10;
    reasons.push("Household dependency factor");
  }

  if (income > 0 && loan > income * 2) {
    score += 15;
    reasons.push("Loan exceeds safe income ratio");
  }

  score = Math.max(0, Math.min(score, 100));

  let decision = "APPROVE";

  if (score >= 70) decision = "ESCALATE";
  else if (score >= 50) decision = "REVIEW";

  const proceed = () => {
    navigate("/hunter");
  };

  return (
    <div style={styles.container}>
      <h1 style={{ color: "#16a085" }}>Guardian Risk Engine</h1>

      <div style={styles.card}>
        <h2>Applicant</h2>
        <p>{application.name}</p>
        <p>{application.occupation}</p>
      </div>

      <div style={styles.card}>
        <h2>Risk Score</h2>
        <h1>{score}/100</h1>
        <p><b>Decision:</b> {decision}</p>
      </div>

      <div style={styles.card}>
        <h2>Risk Signals</h2>
        {reasons.length === 0
          ? <p>No risk signals detected</p>
          : reasons.map((r, i) => <p key={i}>• {r}</p>)
        }
      </div>

      <button onClick={proceed} style={styles.button}>
        Continue to Hunter →
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
    marginTop: 20,
    borderRadius: 12,
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
    cursor: "pointer"
  }
};