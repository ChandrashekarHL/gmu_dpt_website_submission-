import React from "react";

function FacultyProfile() {
  const facultyList = [
    {
      name: "Dr. Asha K",
      designation: "Associate Professor and HOD (AI&ML)",
      Qualification:"Ph.D.",
      photo: "https://gmu.ac.in/public/admission-card/branch/Picture1.png"
    },
    {
      name: "Mr. Keerthi G Prasad",
      designation: "Assistant Professor(Director,ERP,SDTCD)",
      Qualification:"M.tech,(Ph.D.)",
      photo: "https://gmu.ac.in/public/admission-card/branch/KP%20sir.jpg"
    },
    {
      name: "Ms. Muktha Pujar",
      designation: "Assistant Professor",
      Qualification:"M.tech",
      photo: "https://gmu.ac.in/public/admission-card/branch/mukta.jpg"
    },
    {
      name: "Mrs. Akshatha AMS",
      designation: "Assistant Professor",
      Qualification:"M.tech",
      photo: "https://gmu.ac.in/public/admission-card/branch/akshata.jpg"
    },
    {
      name: "Mrs. Shilpa R N",
      designation: "Assistant Professor",
      Qualification:"M.tech",
      photo: "https://gmu.ac.in/public/admission-card/branch.jpg"
    },
     {
      name: "Mrs. Nisha K",
      designation: "Assistant Professor",
           Qualification:"M.tech",
      photo: "https://gmu.ac.in/public/admission-card/branch/nisha.jpg"
    },
     {
      name: "Mrs. Chaithra A",
      designation: "Assistant Professor",
      Qualification:"M.tech",
      photo: "https://gmu.ac.in/public/admission-card/branch.jpg"
    },
     
    {
      name: "Ms. Jayalakshmi M",
      designation: "Assistant Professor",
      Qualification:"M.tech",
      photo: "https://gmu.ac.in/public/admission-card/branch/jayalakshmi.jpg"
    },
     {
      name: "Ms. Yatam Nikhila",
      designation: "Assistant Professor",
      Qualification:"M.tech",
      photo: "https://gmu.ac.in/public/admission-card/branch/yatam.jpg"
    },
     {
      name: "Mr. Praveen R",
      designation: "Assistant Professor",
      Qualification:"M.tech",
      photo: "https://gmu.ac.in/public/admission-card/branch/praveen.jpg"
    },
     
     {
      name: "Ms. Nayana C M",
      designation: "Assistant Professor",
      Qualification:"M.tech",
      photo: "https://gmu.ac.in/public/admission-card/branch/nayana.jpg"
    },
     {
      name: "Mrs. Deepa A L",
      designation: "Lecturer",
      Qualification:"BE(M.tech)",
      photo: "https://gmu.ac.in/public/admission-card/branch.jpg"
    },
     {
      name: "Mr. Darshan A",
      designation: "Lecturer",
      Qualification:"BE(M.tech)",
      photo: "https://gmu.ac.in/public/admission-card/branch.jpg"
    },
     {
      name: "Mr. Chethan G S",
      designation: "Lecturer",
      Qualification:"BE(M.tech)",
      photo: "https://gmu.ac.in/public/admission-card/branch.jpg"
    },
    
    
   


  ];

  return (
    <section id="faculty-profile" style={{ padding: "60px 20px" }}>
      <div style={{ textAlign: "center",maxWidth: "1000px", margin: "0 auto" }}>
        <h2 className="section-heading" style={{ textAlign: "center", marginBottom: "40px" }}>Faculty Profile</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px"
          }}
        >
          {facultyList.map((faculty, index) => (
            <div key={index} className="section-card" style={{ textAlign: "center" }}>
              <img
                src={faculty.photo}
                alt={faculty.name}
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "15px",
                  border: "3px solid #5b1f1f"
                }}
              />
              <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>{faculty.name}</h3>
              <p style={{ margin: "0", fontSize: "16px", fontWeight: "500" }}>{faculty.designation}</p>
              <p style={{ marginTop: "10px", fontSize: "16px", fontStyle: "italic", lineHeight: "1.6" }}>
                Qualification: {faculty.Qualification}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FacultyProfile;
