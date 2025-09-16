import React from "react";

function IQACDocuments() {
  const documents = [
    {
      title: "AQAR 2023-24",
      description: "Annual Quality Assurance Report for the year 2023-24",
      link: "/assets/documents/AQAR_2023-24.pdf"
    },
    {
      title: "Institutional Best Practices",
      description: "Documentation of institutional best practices and initiatives",
      link: "/assets/documents/BestPractices.pdf"
    },
    {
      title: "Quality Policy",
      description: "IQAC quality policy and procedures for academic excellence",
      link: "/assets/documents/QualityPolicy.pdf"
    },
    {
      title: "Strategic Plan 2025-30",
      description: "Long-term strategic plan and vision for the department",
      link: "/assets/documents/StrategicPlan_2025-30.pdf"
    }
  ];

  return (
    <section id="iqac-documents" style={{ padding: "60px 20px" }}>
      <div style={{textAlign:"center", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 className="section-heading" style={{ textAlign: "center", marginBottom: "40px" }}>IQAC Documents</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px"
          }}
        >
          {documents.map((doc, index) => (
            <div key={index} className="section-card" style={{ padding: "25px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>{doc.title}</h3>
              <p style={{ fontSize: "16px", marginBottom: "10px" }}>{doc.description}</p>
              <a
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007BFF", textDecoration: "none", fontWeight: "bold" }}
              >
                View / Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IQACDocuments;
