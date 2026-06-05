import { useState } from "react";

export default function Hunter() {

  const isOfficer = localStorage.getItem("officer");

  const application = JSON.parse(localStorage.getItem("application"));

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // 🔒 Access control AFTER hooks
  if (!isOfficer) {
    return <h2 style={{ padding: 20 }}>Access Denied: Officer Login Required</h2>;
  }

  if (!application) {
    return <h2 style={{ padding: 20 }}>No application found</h2>;
  }

  const sendDecision = async (decision) => {
    setLoading(true);
    setStatus("");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyMugRVLkWFDvYvKjSWAxJKXKV5lzjmDCjMAsEzX9vPJV1fgoOlFh_b4XJ2xfDgi4qv/exec",
        {
          method: "POST",
          body: JSON.stringify({
            action: "decision",
            applicationId: application.applicationId,
            decision: decision
          })
        }
      );

      setStatus(`Decision saved: ${decision}`);
    } catch (error) {
      console.error(error);
      setStatus("Error saving decision");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={{ color: "#16a085" }}>Hunter Decision Panel</h1>

      <div style={styles.card}>
        <h2>Applicant</h2>
        <p>{application.name}</p>
        <p>{application.occupation}</p>
        <p>Loan: {application.loanAmount}</p>
      </div>

      <div style={styles.card}>
        <h2>Final Decision</h2>

        <div style={styles.row}>
          <button
            style={{ ...styles.approve }}
            onClick={() => sendDecision("APPROVED")}
            disabled={loading}
          >
            Approve
          </button>

          <button
            style={{ ...styles.decline }}
            onClick={() => sendDecision("DECLINED")}
            disabled={loading}
          >
            Decline
          </button>

          <button
            style={{ ...styles.review }}
            onClick={() => sendDecision("MORE_INFO")}
            disabled={loading}
          >
            Request Info
          </button>
        </div>

        {loading && <p>Saving...</p>}
        {status && <p style={{ color: "#2ecc71" }}>{status}</p>}
      </div>
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

  row: {
    display: "flex",
    gap: 10,
    marginTop: 10,
    flexWrap: "wrap"
  },

  approve: {
    flex: 1,
    padding: 12,
    background: "#27ae60",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer"
  },

  decline: {
    flex: 1,
    padding: 12,
    background: "#c0392b",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer"
  },

  review: {
    flex: 1,
    padding: 12,
    background: "#f39c12",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer"
  }
};