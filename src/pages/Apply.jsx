import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Apply() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    occupation: "",
    county: "",
    income: "",
    loanAmount: "",
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

      // 🔥 THIS IS STEP 3 (DATA MAPPING)
      name: form.name,
      occupation: form.occupation,
      county: form.county,
      income: form.income,
      loanAmount: form.loanAmount,
      childrenUnder5: form.childrenUnder5,
      loanSharkFlag: form.loanSharkFlag,
      harvestCycle: form.harvestCycle
    };

    await fetch("https://script.google.com/macros/s/AKfycbyxSqWPWw6YUBIbjP52kdZL0BV_LxVPJmAHwDefpT5BFd8qg-2gOQULaMaP3RWToKvs/exec", {
      method: "POST",
      body: JSON.stringify(application)
    });

    localStorage.setItem(
      "application",
      JSON.stringify(application)
    );

    navigate("/guardian");
  };

  return (
    <div style={{ padding: 20 }}>

      <h1>Scout Agent - Loan Application</h1>

      <input name="name" placeholder="Full Name" onChange={handleChange} />
      <input name="occupation" placeholder="Occupation" onChange={handleChange} />
      <input name="county" placeholder="County" onChange={handleChange} />
      <input name="income" placeholder="Income" onChange={handleChange} />
      <input name="loanAmount" placeholder="Loan Amount" onChange={handleChange} />

      <label>
        <input type="checkbox" name="childrenUnder5" onChange={handleChange} />
        Children under 5
      </label>

      <label>
        <input type="checkbox" name="loanSharkFlag" onChange={handleChange} />
        Financial stress flag
      </label>

      <button onClick={submitApplication}>
        Submit Application
      </button>

    </div>
  );
}
