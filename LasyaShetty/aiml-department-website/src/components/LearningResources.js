import React from "react";

function LearningResources() {
  return (
    <section id="learning-resources" style={{ padding: "60px 20px" }}>
      <div style={{textAlign: "center", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 className="section-heading" style={{ textAlign: "center", marginBottom: "40px" }}>
          Department Learning Resources — AIML Department
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "30px",
          }}
        >
          {/* Books & Reference Materials */}
          <div className="section-card" style={{ padding: "25px" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "15px",color:"#5b1f1f" }}>Books & Reference Materials</h3>
            <ul style={{ fontSize: "16px", lineHeight: "1.8",textAlign:"left" }}>
              <li>“Artificial Intelligence: A Modern Approach” – Russell & Norvig</li>
              <li>“Deep Learning” – Goodfellow et al.</li>
              <li>“Machine Learning Yearning” – Andrew Ng</li>
            </ul>
          </div>

          {/* E-Resources & Platforms */}
          <div className="section-card" style={{ padding: "25px" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "15px",color:"#5b1f1f" }}>E-Resources & Platforms</h3>
            <ul style={{ fontSize: "16px", lineHeight: "1.8",textAlign:"left" }}>
              <li><a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer">Coursera</a></li>
              <li><a href="https://www.kaggle.com" target="_blank" rel="noopener noreferrer">Kaggle</a></li>
              <li><a href="https://www.tensorflow.org" target="_blank" rel="noopener noreferrer">TensorFlow</a></li>
            </ul>
          </div>

          {/* Software Tools */}
          <div className="section-card" style={{ padding: "25px" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "15px" ,color:"#5b1f1f"}}>Software Tools</h3>
            <ul style={{ fontSize: "16px", lineHeight: "1.8",textAlign:"left" }}>
              <li>Python & Jupyter Notebook</li>
              <li>TensorFlow / PyTorch</li>
              <li>OpenCV / NLTK / SpaCy</li>
            </ul>
          </div>

          {/* Department Labs */}
          <div className="section-card" style={{ padding: "25px" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "15px" ,color:"#5b1f1f"}}>Department Labs</h3>
            <ul style={{ fontSize: "16px", lineHeight: "1.8",textAlign:"left" }}>
              <li>AI & ML Research Lab (GPUs)</li>
              <li>Data Science Lab</li>
              <li>Computer Vision Lab</li>
              <li>NLP Lab</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningResources;
