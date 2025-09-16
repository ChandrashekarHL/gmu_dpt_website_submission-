import React from "react";

function HODMessage() {
  return (
    <section id="hod-message" style={{ padding: "60px 20px" }}>
      <div style={{ textAlign: "center",maxWidth: "1000px", margin: "0 auto" }}>
        <h2 className="section-heading" style={{ textAlign: "center", marginBottom: "40px" }}>Message from HOD</h2>

        <div
          className="section-card"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "30px",
            alignItems: "center",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
          }}
        >
          {/* HOD Photo */}
          <img
            src="https://gmu.ac.in/public/admission-card/branch/Picture1.png" // Replace with actual photo path
            alt="HOD"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #5b1f1f"
            }}
          />

          {/* Message */}
          <div>
            <p style={{ fontSize: "18px", lineHeight: "1.8", textAlign: "justify" }}>
              Welcome to the Department of Artificial Intelligence and Machine Learning.
              Our department is committed to providing a holistic learning experience that
              nurtures innovation, creativity, and technical excellence. We focus on building
              strong foundational skills while enabling students to explore cutting-edge 
              research areas and industry-driven technologies.
            </p>

            <p style={{ fontSize: "18px", lineHeight: "1.8", marginTop: "15px", textAlign: "justify" }}>
              I invite you to explore our programs, interact with our experienced faculty,
              and be part of our mission to shape the future through AI and ML.
            </p>

            <h4 style={{ marginTop: "20px", color: "#5b1f1f", fontSize: "18px" }}>Dr. Asha K</h4>
            <p style={{ margin: 0 }}>Head of the Department</p>
            <p style={{ margin: 0 }}>Department of AI & ML</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HODMessage;
