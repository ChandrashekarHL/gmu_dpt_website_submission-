import React from "react";

function Projects() {
  const projectCoordinator = {
    name: "Dr. [Coordinator Name]",
    email: "coordinator@university.edu",
    phone: "+91-XXXXXXXXXX",
    photo: "/assets/images/project-coordinator.jpg" // Replace with actual path
  };

  const projectList = [
    {
      title: "Women Protection Application",
      description: "Mobile app that allows women to send emergency alerts with location sharing, integrated with SMS-based alerts and a user-friendly panic button.",
      tools: "Android Studio, Java, Firebase"
    },
    {
      title: "Wi-Fi Connectivity Issues & Reporting System",
      description: "Web-based system to report Wi-Fi connectivity issues with admin dashboard, analytics, status tracking, and email notifications.",
      tools: "React.js, Flask, Firebase Firestore"
    },
    {
      title: "IPL Database Design & Analytics",
      description: "Database project including ER diagrams, relational schema, SQL queries, and analysis of IPL T20 historical data.",
      tools: "MySQL, SQL Queries, ER Diagram"
    },
    {
      title: "Inventory Management System",
      description: "C project implementing product management and stock optimization using Linked Lists, BST, Stacks, and Queues.",
      tools: "C Programming, Data Structures"
    }
  ];

  return (
    <section id="projects" style={{ padding: "60px 20px" }}>
      <div style={{ textAlign:"center",maxWidth: "1000px", margin: "0 auto" }}>
        <h2 className="section-heading" style={{ textAlign: "center", marginBottom: "40px" }}>Projects & Department Coordinator</h2>

        {/* Project Coordinator */}
        <div className="section-card" style={{ display: "flex", flexDirection: "row", gap: "30px", alignItems: "center", marginBottom: "40px" }}>
          <img
            src={projectCoordinator.photo}
            alt="Project Coordinator"
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
              The Project Coordinator guides and oversees department projects, facilitating
              student innovation, mentoring, and ensuring project quality and timely completion.
            </p>
            <h4 style={{ marginTop: "20px", color: "#007BFF" }}>{projectCoordinator.name}</h4>
            <p style={{ margin: 0 }}>Project Coordinator</p>
            <p style={{ margin: 0 }}>Email: {projectCoordinator.email}</p>
            <p style={{ margin: 0 }}>Phone: {projectCoordinator.phone}</p>
          </div>
        </div>

        {/* Projects */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px"
          }}
        >
          {projectList.map((project, index) => (
            <div key={index} className="section-card" style={{ padding: "25px" }}>
              <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>{project.title}</h3>
              <p style={{ fontSize: "16px", lineHeight: "1.8" }}>{project.description}</p>
              <p style={{ fontSize: "16px", fontStyle: "italic", marginTop: "10px" }}>
                Tools: {project.tools}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
