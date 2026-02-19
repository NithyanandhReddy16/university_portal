import React from "react";
import {
  FaBook,
  FaLaptop,
  FaGlobe,
  FaUniversity,
  FaHospital,
  FaFutbol,
  FaHome,
} from "react-icons/fa";

function About() {
  return (
    <>
      <div className="about-top">
        <h1>Our Journey, Our Legacy</h1>
        <p>
          VelTech University has been shaping minds and futures for over 25
          years, fostering innovation, excellence, and global leaders.
        </p>
      </div>

      {/* TIMELINE / MILESTONES */}
      <div className="about-section">
        <h2>🏛 Our Milestones</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>1998</h3>
            <p>
              Founded VelTech University with a vision for quality education.
            </p>
          </div>
          <div className="timeline-item">
            <h3>2005</h3>
            <p>Started international collaborations for global exposure.</p>
          </div>
          <div className="timeline-item">
            <h3>2015</h3>
            <p>Opened advanced research labs and innovation centers.</p>
          </div>
          <div className="timeline-item">
            <h3>2025</h3>
            <p>
              Achieved 95% placement success with over 200 companies visiting.
            </p>
          </div>
        </div>
      </div>

      {/* ALTERNATING SECTIONS */}
      <div className="about-alternate">
        <div className="alt-item">
          <img
            src="https://www.veltech.edu.in/research/img/researchpark.jpg"
            alt="Research Lab"
          />
          <div className="alt-text">
            <h3>🔬 Research & Innovation</h3>
            <p>
              Dedicated labs for research and funded innovation projects,
              fostering creativity and innovation among students and faculty.
            </p>
          </div>
        </div>

        <div className="alt-item reverse">
          <div className="alt-text">
            <h3>🌍 Global Exposure</h3>
            <p>
              International collaborations, student exchange programs, and
              conferences for a truly global experience.
            </p>
          </div>
          <img
            src="https://thumbs.dreamstime.com/b/global-internation-business-cooperation-collaboration-concept-56294780.jpg"
            alt="Global Exposure"
          />
        </div>

        <div className="alt-item">
          <img
            src="https://images.shiksha.com/mediadata/images/1744950516phpAKlnA0.jpeg"
            alt="Modern Infrastructure"
          />
          <div className="alt-text">
            <h3>🏫 Modern Infrastructure</h3>
            <p>
              Smart classrooms, advanced labs, digital library access, and
              eco-friendly campus design.
            </p>
          </div>
        </div>

        <div className="alt-item reverse">
          <div className="alt-text">
            <h3>🎓 Strong Placements</h3>
            <p>
              Excellent placement record with multinational companies and
              mentorship programs to prepare students for the future.
            </p>
          </div>
          <img
            src="https://www.veltech.edu.in/wp-content/uploads/2025/09/DCC_web.jpg"
            alt="Placement Success"
          />
        </div>
      </div>

      {/* STATS STRIP */}
      <div className="about-stats-strip">
        <div>
          <h2>25+</h2>
          <p>Years of Excellence</p>
        </div>
        <div>
          <h2>15,000+</h2>
          <p>Students</p>
        </div>
        <div>
          <h2>800+</h2>
          <p>Faculty</p>
        </div>
        <div>
          <h2>200+</h2>
          <p>Top Recruiters</p>
        </div>
      </div>

      {/* CAMPUS FACILITIES */}
      <div className="about-section highlight-box">
        <h2>🏛 Campus Facilities</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>
              <FaBook /> Central Library
            </h3>
            <p>Over 1 lakh books and digital learning resources.</p>
          </div>

          <div className="about-card">
            <h3>
              <FaHospital /> Medical Center
            </h3>
            <p>24/7 healthcare support for students and staff.</p>
          </div>

          <div className="about-card">
            <h3>
              <FaFutbol /> Sports Complex
            </h3>
            <p>
              Indoor & outdoor sports facilities with professional coaching.
            </p>
          </div>

          <div className="about-card">
            <h3>
              <FaHome /> Hostels
            </h3>
            <p>Separate hostels for boys & girls with modern amenities.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
