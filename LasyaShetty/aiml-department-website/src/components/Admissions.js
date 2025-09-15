import React from "react";

function Admissions() {
  return (
    <section id="admissions" style={{ padding: "50px 20px" }}>
      
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h2 className="section-heading" style={{ textAlign: "center", marginBottom: "30px" }}>Admissions</h2>
        <p style={{ color: "#444", marginBottom: "20px" , fontSize:"18px"}}>
          Join our AIML Department and be part of a thriving community of innovators.
          We offer undergraduate and postgraduate programs focused on Artificial Intelligence
          and Machine Learning.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}>
          <div className="section-card">
            <h3>Eligibility</h3>
            <p style={{ color: "#555",fontSize:"16px" }}>
              • 10+2 with PCM<br />
              • Entrance Exam (CET/COMEDK or equivalent)
            </p>
          </div>

          <div className="section-card">
            <h3>How to Apply</h3>
            <p style={{ color: "#555",fontSize:"16px" }}>
              • Online application form<br />
              • Submit documents<br />
              • Appear for counseling/interview
            </p>
          </div>

          <div className="section-card">
            <h3>Important Dates</h3>
            <p style={{ color: "#555" ,fontSize:"16px"}}>
              • Applications open: May<br />
              • Admissions close: July
            </p>
          </div>
        </div>

        <button
          style={{
            marginTop: "40px",
            padding: "12px 25px",
            background: "#803c3c",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Apply Now
        </button>
      </div>
    </section>
  );
}

export default Admissions;
