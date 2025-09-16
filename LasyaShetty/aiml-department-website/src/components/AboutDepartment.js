import React from "react";

function AboutDepartment() {
  return (
    <section id="about-department" style={{textAlign: "center", padding: "60px 20px" }}>
      <h2 className="section-heading">About</h2>
      <div className="section-card" style={{ maxWidth: "1000px", margin: "0 auto",fontSize:"18px" }}>
        
        <p >
          The Department of Computer Science with specialization in Artificial Intelligence and Machine Learning
          is dedicated to nurturing future innovators and problem-solvers. The department emphasizes a blend of 
          strong theoretical foundations and hands-on practical learning. Students are trained in emerging 
          technologies such as AI, ML, Data Science, and Cloud Computing through industry-oriented curriculum, 
          expert faculty guidance, and cutting-edge laboratories.
        </p>

        <p style={{ marginTop: "20px" }}>
          Our vision is to produce competent professionals who can contribute to technological advancements and 
          tackle real-world challenges. Regular workshops, seminars, and hackathons are organized to enhance 
          students' technical and problem-solving skills while fostering innovation and teamwork.
        </p>
      </div>
    </section>
  );
}

export default AboutDepartment;
