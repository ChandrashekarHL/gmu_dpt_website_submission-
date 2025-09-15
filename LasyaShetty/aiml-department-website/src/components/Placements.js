import React from "react";

function Placements() {
  const placementCoordinator = {
    name: "Dr. [Coordinator Name]",
    email: "coordinator@university.edu",
    phone: "+91-XXXXXXXXXX",
    photo: "/assets/images/placement-coordinator.jpg"
  };

  const placementStats = [
    { year: "2024", placed: 42, highest: "18 LPA", average: "7 LPA" },
    { year: "2023", placed: 38, highest: "14 LPA", average: "6 LPA" },
    { year: "2022", placed: 35, highest: "12 LPA", average: "5.5 LPA" }
  ];

  const topCompanies = ["Google", "Microsoft", "Amazon", "Infosys", "TCS", "Wipro"];

  return (
    <section id="placements" style={{ padding: "60px 20px" }}>
      <div style={{ textAlign: "center",maxWidth: "1000px", margin: "0 auto" }}>
        <h2 className="section-heading" style={{ textAlign: "center", marginBottom: "40px" }}>Placements & Career Support</h2>

        {/* Placement Coordinator */}
        <div className="section-card" style={{ display: "flex", gap: "30px", alignItems: "center", padding: "30px", marginBottom: "40px" }}>
          <img
            src={placementCoordinator.photo}
            alt="Placement Coordinator"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #5b1f1f"
            }}
          />
          <div>
            <p style={{ fontSize: "18px", lineHeight: "1.8", textAlign: "justify" }}>
              The Placement Coordinator bridges the gap between industry and students, managing
              internships, training programs, and campus recruitment to ensure the best
              career opportunities.
            </p>
            <h4 style={{ marginTop: "20px", color:"#5b1f1f"}}>{placementCoordinator.name}</h4>
            <p style={{ margin: 0 }}>Placement Coordinator</p>
            <p style={{ margin: 0 }}>Email: {placementCoordinator.email}</p>
            <p style={{ margin: 0 }}>Phone: {placementCoordinator.phone}</p>
          </div>
        </div>

        {/* Placement Statistics */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          {placementStats.map((stat, index) => (
            <div key={index} className="section-card" style={{ padding: "20px", textAlign: "center" }}>
              <h3>{stat.year}</h3>
              <p>Students Placed: <strong>{stat.placed}</strong></p>
              <p>Highest Package: <strong>{stat.highest}</strong></p>
              <p>Average Package: <strong>{stat.average}</strong></p>
            </div>
          ))}
        </div>

        {/* Top Recruiters */}
        <h3 style={{ textAlign: "center", marginBottom: "20px",color:"#803c3c" }}>Top Recruiters</h3>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px" }}>
          {topCompanies.map((company, index) => (
            <span key={index} className="section-card" style={{ padding: "10px 15px", fontSize: "16px" }}>
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Placements;
