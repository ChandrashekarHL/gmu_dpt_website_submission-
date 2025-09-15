import React from "react";

function ResearchPublications() {
  const researchList = [
    {
      title: "Deep Learning for Computer Vision",
      authors: "Dr. A. Sharma, Prof. B. Kumar",
      journal: "IEEE Transactions on Pattern Analysis, 2024",
      link: "https://ieeexplore.ieee.org/document/XXXX"
    },
    {
      title: "NLP Techniques in AI Chatbots",
      authors: "Dr. C. Rao, Prof. D. Mehta",
      journal: "Springer Journal of AI Research, 2023",
      link: "https://link.springer.com/article/XXXX"
    },
    {
      title: "AI in Healthcare: Predictive Models",
      authors: "Prof. B. Kumar, Dr. A. Sharma",
      journal: "Elsevier Journal of AI in Medicine, 2023",
      link: "https://www.sciencedirect.com/science/article/XXXX"
    }
  ];

  return (
    <section id="research-publications" style={{ padding: "60px 20px" }}>
      <div style={{textAlign: "center", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 className="section-heading" style={{ textAlign: "center", marginBottom: "40px" }}>Research & Publications</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px"
          }}
        >
          {researchList.map((research, index) => (
            <div key={index} className="section-card" style={{ padding: "25px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>{research.title}</h3>
              <p style={{ fontSize: "16px", marginBottom: "5px" }}>
                <strong>Authors:</strong> {research.authors}
              </p>
              <p style={{ fontSize: "16px", fontStyle: "italic", marginBottom: "10px" }}>
                {research.journal}
              </p>
              <a
                href={research.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#007BFF",
                  textDecoration: "none",
                  fontWeight: "bold"
                }}
              >
                View Publication
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchPublications;
