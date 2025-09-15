import React from "react";

function Alumni() {
  const alumniList = [
    {
      name: "Riya Sharma",
      batch: "2020",
      position: "AI Engineer at Google",
      image: "https://via.placeholder.com/100"
    },
    {
      name: "Arjun Kumar",
      batch: "2019",
      position: "Machine Learning Scientist at Amazon",
      image: "https://via.placeholder.com/100"
    },
    {
      name: "Sneha Patel",
      batch: "2021",
      position: "Data Analyst at Microsoft",
      image: "https://via.placeholder.com/100"
    }
  ];

  return (
    <section id="alumni" style={{ textAlign:"center", padding: "50px 20px" }}>
      
      <h2 className="section-heading" style={{ textAlign: "center", marginBottom: "30px" }}>Our Alumni</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px",
          maxWidth: "1000px",
          margin: "0 auto",
          
        }}
        
      >
        
        {alumniList.map((alum, index) => (
          <div key={index} className="section-card" style={{ textAlign: "center" }}>
            <img
              src={alum.image}
              alt={alum.name}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginBottom: "15px",
                objectFit: "cover"
              }}
            />
            <h3>{alum.name}</h3>
            <p style={{ color: "#777", margin: "5px 0" }}>Batch of {alum.batch}</p>
            <p style={{ color: "#444" }}>{alum.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Alumni;
