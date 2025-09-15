import React from "react";

function Programs() {
  const programs = [
    {
      Certification:
        "Bachelor of Technology (B.Tech) in Computer Science - Artificial Intelligence and Machine Learning",
      intake: "120 students",
      CareerSupport:
        "Placement Assistance with top recruiters in Artificial Intelligence, Machine Learning sectors.\n" +
        "Internship opportunities through industry tie-ups.\n" +
        "Workshops, seminars, and hackathons to build real-world skills.\n" +
        "Access to Alumni/Industry mentors and career guidance.",
      syllabus: [
        { year: "2023 Scheme", file: "/https://gmu.ac.in/pdfview_assets%5Cdownloadmaterial%5CUG%20Programs%5Cpd%5CProgram%20Document%20-%20CS%20-%20AIML%20-2023.pdf" },
        { year: "2024 Scheme", file: "/assets/syllabus/2023-AIML.pdf" },
        { year: "2025 Scheme", file: "/assets/syllabus/2024-AIML.pdf" }
      ]
    }
  ];

  return (
    <section id="programs" style={{textAlign: "center", padding: "50px 20px" }}>
      <h2 className="section-heading" style={{ textAlign: "center", marginBottom: "40px" }}>Programs & Courses Offered</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto"
        }}
      >
        {programs.map((program, index) => (
          <div key={index} className="section-card" style={{ padding: "25px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginBottom: "30px"
              }}
            >
              <div>
                <strong style={{fontSize:"20px",color:"#5b1f1f"}}>Certification</strong>
                <p style={{ margin: "8px 0 0" ,fontSize:"18px"}}>{program.Certification}</p>
              </div>

              <div>
                <strong style={{fontSize:"20px",color:"#5b1f1f"}}>Career Support</strong>
                <p style={{ margin: "8px 0 0", whiteSpace: "pre-line",fontSize:"18px" }}>
                  {program.CareerSupport}
                </p>
              </div>

              <div>
                <strong style={{fontSize:"20px",color:"#5b1f1f"}}>Intake</strong>
                <p style={{ margin: "8px 0 0" ,fontSize:"18px"}}>{program.intake}</p>
              </div>
            </div>

            <h4 style={{ marginBottom: "10px" ,fontSize:"20px",color:"#5b1f1f"}}>Syllabus Copies</h4>
            <ul>
              {program.syllabus.map((s, i) => (
                <li key={i}>
                  <a
                    href={s.file}
                    download
                    style={{ color: "#007BFF", textDecoration: "none" }}
                  >
                    {s.year}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Programs;
