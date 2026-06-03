import { useEffect, useState } from "react";

export default function Dashboard() {

  const [metrics, setMetrics] = useState({
    applications: 0,
    approved: 0,
    pending: 0,
    declined: 0
  });

  useEffect(() => {

    fetch(
      "https://script.google.com/macros/s/AKfycbyxSqWPWw6YUBIbjP52kdZL0BV_LxVPJmAHwDefpT5BFd8qg-2gOQULaMaP3RWToKvs/exec?action=metrics"
    )
      .then((response) => response.json())
      .then((data) => {
        setMetrics(data);
      })
      .catch((error) => {
        console.error("Metrics error:", error);
      });

  }, []);

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1000px",
        margin: "0 auto"
      }}
    >
      <h1>UJIMA AI Dashboard</h1>

      <p>
        Live metrics from the loan processing system.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          marginTop: "30px"
        }}
      >

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h3>Applications Received</h3>
          <h1>{metrics.applications}</h1>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h3>Approved</h3>
          <h1>{metrics.approved}</h1>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h3>Pending Review</h3>
          <h1>{metrics.pending}</h1>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <h3>Declined</h3>
          <h1>{metrics.declined}</h1>
        </div>

      </div>

      <div
        style={{
          marginTop: "40px",
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <h2>Impact Projection</h2>

        <p>
          Projected increase in informal trader access:
          <strong> +37%</strong>
        </p>

        <p>
          Human-in-loop review ensures ethical lending decisions
          while reducing bias against informal workers.
        </p>
      </div>

    </div>
  );
}