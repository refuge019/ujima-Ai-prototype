import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Apply() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    occupation: "",
    county: "",
    income: "",
    loanAmount: "",
    loanPurpose: "",
    childrenUnder5: false,
    loanSharkFlag: false,
    harvestCycle: "Maize"
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const submitApplication = async () => {

    const application = {
      applicationId: Date.now(),
      name: form.name,
      age: form.age,
      occupation: form.occupation,
      county: form.county,
      income: form.income,
      loanAmount: form.loanAmount,
      loanPurpose: form.loanPurpose,
      childrenUnder5: form.childrenUnder5,
      loanSharkFlag: form.loanSharkFlag,
      harvestCycle: form.harvestCycle
    };

    await fetch(
      "https://script.google.com/macros/s/AKfycbyMugRVLkWFDvYvKjSWAxJKXKV5lzjmDCjMAsEzX9vPJV1fgoOlFh_b4XJ2xfDgi4qv/exec",
      {
        method: "POST",
        body: JSON.stringify(application)
      }
    );

    localStorage.setItem(
      "application",
      JSON.stringify(application)
    );

    navigate("/scout");
  };

  return (
    <div
      style={{
        background: "#000",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      {/* Progress Bar */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "50px",
          fontSize: "20px"
        }}
      >
        <strong style={{ color: "#16a085" }}>1 Apply</strong>
        <span>2 Scout</span>
        <span>3 Guardian</span>
        <span>4 Decision</span>
      </div>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#1f1f1f",
          borderRadius: "20px",
          padding: "40px"
        }}
      >
        <h1>Loan Application</h1>

        <p style={{ color: "#aaa" }}>
          Submit your application to the Scout Agent
          for financial literacy screening.
        </p>

        {/* Name */}

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          style={inputStyle}
        />

        {/* Age */}

        <input
          name="age"
          placeholder="Age"
          onChange={handleChange}
          style={inputStyle}
        />

        {/* Occupation */}

        <select
          name="occupation"
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select Occupation</option>
          <option>Market Vendor</option>
          <option>Shea Butter Trader</option>
          <option>Maize Farmer</option>
          <option>Formal Employee</option>
          <option>Boda Boda Operator</option>
        </select>

        {/* County */}

        <select
          name="county"
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select County</option>
          <option>Kakamega</option>
          <option>Busia</option>
          <option>Kisumu</option>
          <option>Nairobi</option>
          <option>Mombasa</option>
          <option>Murang'a</option>
        </select>

        {/* Income */}

        <input
          name="income"
          placeholder="Monthly Income (KES)"
          onChange={handleChange}
          style={inputStyle}
        />

        {/* Loan Amount */}

        <input
          name="loanAmount"
          placeholder="Loan Amount (KES)"
          onChange={handleChange}
          style={inputStyle}
        />

        {/* Loan Purpose */}

        <select
          name="loanPurpose"
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Loan Purpose</option>
          <option>School Fees</option>
          <option>Business Stock</option>
          <option>Farm Inputs</option>
          <option>Medical Emergency</option>
          <option>Other</option>
        </select>

        {/* Harvest Cycle */}

        <select
          name="harvestCycle"
          onChange={handleChange}
          style={inputStyle}
        >
          <option>Maize</option>
          <option>Matooke</option>
          <option>Coffee</option>
          <option>Tea</option>
        </select>

        {/* Checkboxes */}

        <div style={{ marginTop: "20px" }}>

          <label
            style={{
              display: "block",
              marginBottom: "15px"
            }}
          >
            <input
              type="checkbox"
              name="childrenUnder5"
              onChange={handleChange}
            />{" "}
            Children under 5
          </label>

          <label>
            <input
              type="checkbox"
              name="loanSharkFlag"
              onChange={handleChange}
            />{" "}
            Financial stress signal
          </label>

        </div>

        {/* Submit */}

        <button
          onClick={submitApplication}
          style={{
            width: "100%",
            marginTop: "30px",
            padding: "16px",
            borderRadius: "12px",
            border: "none",
            background: "#16a085",
            color: "white",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          Submit to Scout Agent →
        </button>

      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "15px",
  borderRadius: "10px",
  border: "1px solid #444",
  background: "#111",
  color: "white",
  fontSize: "16px",
  boxSizing: "border-box"
};