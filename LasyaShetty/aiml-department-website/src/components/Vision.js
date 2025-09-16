import React from "react";

function Vision() {
  return (
    <section id="vision" style={{ padding: "60px 20px", background: "#f8f9fb" }}>
      <div style={{ textAlign: "center",maxWidth: "1000px", margin: "0 auto" }}>
        <h2 className="section-heading" style={{  marginBottom: "40px" }}>
          Vision And Mission 
        </h2>

        <div className="section-card" style={{ padding: "30px", textAlign: "justify" }}>
          {/* Vision */}
          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ fontSize: "22px", marginBottom: "10px",color:"#5b1f1f" }}>Vision</h3>
            <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
              School of Computer Science and Engineering (SCSE) will have a transformative
              impact on society through continual innovation in computer Science and
              engineering education, research, skill development, creativity, and
              entrepreneurship.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 style={{ fontSize: "22px", marginBottom: "10px",color:"#5b1f1f" }}>Mission</h3>
            <p style={{ fontSize: "18px", lineHeight: "1.8", whiteSpace: "pre-line" }}>
              - To disseminate knowledge and conduct research in computer Science and
                engineering with learner centric approach{"\n"}
              - To teach skills such as critical thinking, creativity and innovation,
                collaboration, communication, technical and digital, flexibility and
                adaptability, cultural values, and leadership and responsibility{"\n"}
              - To develop global citizens by educating students on emotional, physical,
                social, economic, environmental, spiritual dimensions of human growth in
                addition to intellectual pursuits{"\n"}
              - To address real-world challenges and to establish the groundwork for
                entrepreneurship and lifelong learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
