import React from "react";

function Courses() {
  return (
    <div className="courses-section">
      <h2>🎓 Our Courses</h2>

      <div className="courses-grid">
        <div className="course-card">
          <h3>Computer Science & Engineering</h3>
          <p>Cutting-edge curriculum with AI, ML, and IoT focus.</p>
        </div>

        <div className="course-card">
          <h3>Mechanical Engineering</h3>
          <p>Advanced labs and hands-on projects in modern mechanics.</p>
        </div>

        <div className="course-card">
          <h3>Electronics & Communication</h3>
          <p>Practical exposure in circuits, embedded systems, and robotics.</p>
        </div>

        <div className="course-card">
          <h3>Business Administration</h3>
          <p>Management courses with global industry collaborations.</p>
        </div>

        <div className="course-card">
          <h3>Biotechnology</h3>
          <p>
            Research-driven program in genetics, microbiology, and
            bioinformatics.
          </p>
        </div>

        <div className="course-card">
          <h3>Architecture & Design</h3>
          <p>
            Creative curriculum with focus on sustainable and smart designs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Courses;
