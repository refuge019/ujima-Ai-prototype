import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1000px",
        margin: "0 auto"
      }}
    >
      {/* Header */}
      <h1>UJIMA AI</h1>

      <h2>
        Ethical AI for SACCO Financial Inclusion
      </h2>

      <p>
        Supporting informal traders, farmers and small businesses
        through transparent AI-assisted lending.
      </p>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "25px",
          marginBottom: "30px"
        }}
      >
        <Link to="/apply">
          Apply For Loan
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/ethics">
          Ethics
        </Link>
      </div>

      <hr />

      {/* Workflow Section */}
      <h2>Agent Pride Workflow</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "25px"
        }}
      >

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px"
          }}
        >
          <h3>Scout Agent</h3>

          <p>
            Captures loan applications and member information.
          </p>
        </div>

        <div
          style={{
            textAlign: "center",
            fontSize: "24px"
          }}
        >
          ↓
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px"
          }}
        >
          <h3>Guardian Agent</h3>

          <p>
            Reviews repayment capacity, harvest cycles,
            income stability and risk indicators.
          </p>
        </div>

        <div
          style={{
            textAlign: "center",
            fontSize: "24px"
          }}
        >
          ↓
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px"
          }}
        >
          <h3>Hunter Agent</h3>

          <p>
            Coordinates human review for applications
            requiring additional oversight.
          </p>
        </div>

        <div
          style={{
            textAlign: "center",
            fontSize: "24px"
          }}
        >
          ↓
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px"
          }}
        >
          <h3>Decision Recorded</h3>

          <p>
            Final decision is stored in the audit trail
            and written to the system database.
          </p>
        </div>

      </div>

      <hr style={{ marginTop: "40px" }} />

      {/* Project Summary */}
      <h2>Project Overview</h2>

      <p>
        Ujima AI is a lightweight fintech MVP designed
        to improve access to ethical lending for informal
        traders, farmers and SACCO members.
      </p>

      <p>
        The platform combines AI-assisted recommendations
        with mandatory human review for higher-risk
        applications, ensuring transparency,
        accountability and fairness.
      </p>
    </div>
  );
}