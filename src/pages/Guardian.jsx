import { useNavigate } from "react-router-dom";

export default function Guardian() {

  const navigate = useNavigate();

  const application =
    JSON.parse(localStorage.getItem("application"));

  if (!application) {
    return <h2>No application found</h2>;
  }

  let decision = "APPROVE";

  if (
    application.loanAmount > 15000 ||
    application.childrenUnder5 === true ||
    application.loanSharkFlag === true
  ) {
    decision = "ESCALATE";
  }

  const proceed = () => {
    if (decision === "ESCALATE") {
      navigate("/hunter");
    } else {
      alert("Loan Approved (Simulated)");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Guardian Agent</h1>

      <p>Name: {application.name}</p>
      <p>Occupation: {application.occupation}</p>
      <p>Loan: {application.loanAmount}</p>

      <h2>Decision: {decision}</h2>

      <button onClick={proceed}>
        Continue
      </button>
    </div>
  );
}