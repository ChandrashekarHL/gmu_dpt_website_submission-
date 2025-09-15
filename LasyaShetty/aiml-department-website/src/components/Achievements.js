import React from "react";

function Achievements() {
  const facultyAchievements = [
    "Dr. A received the Best Research Paper Award at IEEE Conference 2024.",
    "Prof. B published a book on AI & Machine Learning.",
    "Dr. C secured a grant for advanced NLP research from DST."
  ];

  const studentAchievements = [
    "Team X won 1st place in National AI Hackathon 2024.",
    "Student Y published a research paper in Springer Journal.",
    "Team Z secured internship at Google Research for 2024 summer."
  ];

  return (
    <section id="achievements" style={{ padding: "60px 20px" }}>
      <div style={{ textAlign:"center", maxWidth: "1000px", margin: "0 auto" ,fontSize:"16px"}}>
        <h2 className="section-heading" style={{ textAlign: "center", marginBottom: "40px" }}>Achievements</h2>

        {/* Faculty Achievements */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ textAlign: "center", marginBottom: "20px",color:"#5b1f1f" }}>
            Faculty Achievements
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px"
            }}
          >
            {facultyAchievements.map((achievement, index) => (
              <div key={index} className="section-card">
                {achievement}
              </div>
            ))}
          </div>
        </div>

        {/* Student Achievements */}
        <div>
          <h3 style={{ textAlign: "center", marginBottom: "20px", color:"#5b1f1f" }}>
            Student Achievements
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px"
            }}
          >
            {studentAchievements.map((achievement, index) => (
              <div key={index} className="section-card">
                {achievement}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
