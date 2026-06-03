import { useState } from "react";

export default function Hunter() {

  const application =
    JSON.parse(localStorage.getItem("application"));

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  if (!application) {
    return (
      <div style={{ padding: 20 }}>
        <h2>No application found</h2>
      </div>
    );
  }

  const sendDecision = async (decision) => {

    setLoading(true);
    setStatus("");

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyxSqWPWw6YUBIbjP52kdZL0BV_LxVPJmAHwDefpT5BFd8qg-2gOQULaMaP3RWToKvs/exec", {
        method: "POST",
        body: JSON.stringify({
          action: "decision",
          applicationId: application.applicationId,
          decision: decision
        })
      });

      setStatus(`Decision saved: ${decision}`);

    } catch (error) {
      console.error(error);
      setStatus("Error saving decision");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>

      <h1>Hunter Agent</h1>

      <h2>Human Review Panel</h2>

      <div style={{ marginBottom: 10 }}>
        <p><b>Name:</b> {application.name}</p>
        <p><b>Occupation:</b> {application.occupation}</p>
        <p><b>County:</b> {application.county}</p>
        <p><b>Loan:</b> {application.loanAmount}</p>
        <p><b>Income:</b> {application.income}</p>
      </div>

      <h3>Recommendation: Requires Human Review</h3>

      <div style={{ display: "flex", gap: 10, marginTop: 15 }}>

        <button
          onClick={() => sendDecision("APPROVED")}
          disabled={loading}
        >
          Approve
        </button>

        <button
          onClick={() => sendDecision("DECLINED")}
          disabled={loading}
        >
          Decline
        </button>

        <button
          onClick={() => sendDecision("MORE_INFO")}
          disabled={loading}
        >
          Request More Info
        </button>

      </div>

      {loading && <p>Saving decision...</p>}

      {status && (
        <p style={{ marginTop: 10, color: "green" }}>
          {status}
        </p>
      )}

    </div>
  );
}