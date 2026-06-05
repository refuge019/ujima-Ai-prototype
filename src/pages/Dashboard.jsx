import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();
  const isOfficer = localStorage.getItem("officer");

  // ✅ ALL HOOKS FIRST (VERY IMPORTANT)
  const [metrics, setMetrics] = useState({
    applications: 0,
    approved: 0,
    pending: 0,
    declined: 0
  });

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // -----------------------------
  // METRICS FETCH
  // -----------------------------
  useEffect(() => {

    if (!isOfficer) return;

    fetch("https://script.google.com/macros/s/AKfycbyMugRVLkWFDvYvKjSWAxJKXKV5lzjmDCjMAsEzX9vPJV1fgoOlFh_b4XJ2xfDgi4qv/exec?action=metrics")
      .then(res => res.json())
      .then(data => setMetrics(data || {}))
      .catch(err => console.error(err));

  }, [isOfficer]);

  // -----------------------------
  // APPLICATIONS FETCH
  // -----------------------------
  useEffect(() => {

    if (!isOfficer) return;

    fetch("https://script.google.com/macros/s/AKfycbyMugRVLkWFDvYvKjSWAxJKXKV5lzjmDCjMAsEzX9vPJV1fgoOlFh_b4XJ2xfDgi4qv/exec?action=applications")
      .then(res => res.json())
      .then(data => {

        let safe = [];

        if (Array.isArray(data)) {
          safe = data;
        } else if (Array.isArray(data?.applications)) {
          safe = data.applications;
        }

        setApplications(safe);

      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));

  }, [isOfficer]);

  // -----------------------------
  // SAFE GATE (AFTER HOOKS)
  // -----------------------------
  if (!isOfficer) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Access Denied: Officer Login Required</h2>
        <p>Please log in using the officer portal.</p>
      </div>
    );
  }

  const openCase = (app) => {
    localStorage.setItem("application", JSON.stringify(app));
    navigate("/guardian");
  };

  return (
    <div style={styles.container}>

      <h1 style={{ color: "#16a085" }}>
        UJIMA AI Operations Dashboard
      </h1>

      <p style={{ color: "#aaa" }}>
        Scout → Guardian → Hunter Loan Pipeline
      </p>

      {/* KPI */}
      <div style={styles.grid}>
        <Card title="Applications" value={metrics.applications} />
        <Card title="Approved" value={metrics.approved} />
        <Card title="Pending" value={metrics.pending} />
        <Card title="Declined" value={metrics.declined} />
      </div>

      {/* QUEUE */}
      <div style={styles.panel}>
        <h2>📋 Application Queue</h2>

        {loading && <p>Loading...</p>}

        {Array.isArray(applications) && applications.map((app, index) => (
          <div key={index} style={styles.row}>
            <div>
              <b>{app.name}</b> — KES {app.loanAmount}
            </div>

            <button
              onClick={() => openCase(app)}
              style={styles.button}
            >
              Review →
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

/* CARD */
function Card({ title, value }) {
  return (
    <div style={styles.card}>
      <h3 style={{ fontSize: 14 }}>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}

/* STYLES */
const styles = {
  container: {
    padding: 40,
    maxWidth: 1000,
    margin: "0 auto",
    fontFamily: "Arial",
    background: "#0f0f0f",
    minHeight: "100vh",
    color: "white"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 20,
    marginTop: 30
  },
  card: {
    background: "#1a1a1a",
    padding: 20,
    borderRadius: 12
  },
  panel: {
    marginTop: 40,
    background: "#1a1a1a",
    padding: 20,
    borderRadius: 12
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: 12,
    borderBottom: "1px solid #333"
  },
  button: {
    background: "#16a085",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: 8,
    cursor: "pointer"
  }
};