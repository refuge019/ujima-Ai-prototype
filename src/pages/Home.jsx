import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        background: "#000",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif"
      }}
    >
      {/* Top Navigation */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px 50px",
          borderBottom: "1px solid #333"
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "36px"
          }}
        >
          🟢 Ujima AI
        </h1>

        <div
          style={{
            background: "#222",
            padding: "10px 20px",
            borderRadius: "30px"
          }}
        >
          MVP Demo
        </div>
      </div>

      {/* Hero Section */}

      <div
        style={{
          textAlign: "center",
          padding: "80px 20px"
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            marginBottom: "20px"
          }}
        >
          Fair lending for every trader
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#ccc",
            maxWidth: "900px",
            margin: "0 auto"
          }}
        >
          AI-powered loan screening built for Kenyan SACCOs —
          respecting harvest cycles, informal income and local
          context.
        </p>
      </div>

      {/* Agent Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
          padding: "20px 50px"
        }}
      >
        <div
          style={{
            background: "#1f1f1f",
            borderRadius: "20px",
            padding: "30px",
            textAlign: "center"
          }}
        >
          <h2>🌱 Scout Agent</h2>

          <p>
            Financial literacy coach. Guides members before
            they apply.
          </p>
        </div>

        <div
          style={{
            background: "#1f1f1f",
            borderRadius: "20px",
            padding: "30px",
            textAlign: "center"
          }}
        >
          <h2>🛡 Guardian Agent</h2>

          <p>
            Loan triage. Screens applications fairly using
            harvest data.
          </p>
        </div>

        <div
          style={{
            background: "#1f1f1f",
            borderRadius: "20px",
            padding: "30px",
            textAlign: "center"
          }}
        >
          <h2>🎯 Hunter Agent</h2>

          <p>
            Human coordinator. Prepares briefings for loan
            officers.
          </p>
        </div>
      </div>

      {/* Impact Metrics */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          padding: "40px 50px"
        }}
      >
        <div
          style={{
            background: "#1f1f1f",
            borderRadius: "20px",
            padding: "30px",
            textAlign: "center"
          }}
        >
          <h1 style={{ color: "#16a085" }}>37%</h1>

          <p>More female vendor approvals</p>
        </div>

        <div
          style={{
            background: "#1f1f1f",
            borderRadius: "20px",
            padding: "30px",
            textAlign: "center"
          }}
        >
          <h1>80%</h1>

          <p>Tier-1 queries handled by AI</p>
        </div>

        <div
          style={{
            background: "#1f1f1f",
            borderRadius: "20px",
            padding: "30px",
            textAlign: "center"
          }}
        >
          <h1 style={{ color: "#2e86de" }}>&lt;3%</h1>

          <p>Target default rate</p>
        </div>
      </div>

      {/* CTA Buttons */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "0 50px 80px"
        }}
      >
        <Link
          to="/apply"
          style={{
            textDecoration: "none",
            color: "white",
            border: "2px solid white",
            borderRadius: "16px",
            padding: "20px",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold"
          }}
        >
          Apply for a Loan →
        </Link>

        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "white",
            border: "2px solid white",
            borderRadius: "16px",
            padding: "20px",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold"
          }}
        >
          Loan Officer Dashboard
        </Link>

        <Link
          to="/ethics"
          style={{
            textDecoration: "none",
            color: "white",
            border: "2px solid white",
            borderRadius: "16px",
            padding: "20px",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold"
          }}
        >
          Ethical Architecture
        </Link>
      </div>
    </div>
  );
}
