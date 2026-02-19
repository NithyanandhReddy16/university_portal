import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero">
        <div>
          <h1>VelTech University 🎓</h1>
          <p>Empowering Students | Shaping Futures | Building Careers</p>
          <Link to="/courses">
            <button className="primary-btn">Explore Courses</button>
          </Link>
        </div>
      </div>

      {/* STATS */}
      <div className="section stats">
        <div className="stat-box">
          <h2>5000+</h2>
          <p>👨‍🎓 Students</p>
        </div>
        <div className="stat-box">
          <h2>300+</h2>
          <p>👩‍🏫 Faculty</p>
        </div>
        <div className="stat-box">
          <h2>200+</h2>
          <p>🏢 Companies</p>
        </div>
        <div className="stat-box">
          <h2>95%</h2>
          <p>💼 Placement Rate</p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="section">
        <h2>🌟 Why Choose VelTech University?</h2>
        <div className="stats">
          <div className="stat-box">
            <h3>🎓 Industry Curriculum</h3>
            <p>Designed with industry experts.</p>
          </div>
          <div className="stat-box">
            <h3>🔬 Research Labs</h3>
            <p>Advanced innovation centers.</p>
          </div>
          <div className="stat-box">
            <h3>🌍 Global Exposure</h3>
            <p>International collaborations.</p>
          </div>
        </div>
      </div>

      {/* PLACEMENT HIGHLIGHTS */}
      <div className="section">
        <h2>💼 Placement Highlights 2025</h2>

        <div className="card-grid">
          <div className="placement-card">
            <h3>₹25 LPA</h3>
            <p>Highest Package</p>
          </div>

          <div className="placement-card">
            <h3>₹6.5 LPA</h3>
            <p>Average Package</p>
          </div>

          <div className="placement-card">
            <h3>200+</h3>
            <p>Companies Visited</p>
          </div>

          <div className="placement-card">
            <h3>95%</h3>
            <p>Placement Rate</p>
          </div>
        </div>
      </div>

      {/* TOP RECRUITERS */}
      {/* TOP RECRUITERS */}
      <div className="section">
        <h2>🏢 Top Recruiters</h2>

        <div className="card-grid">
          <div className="recruiter-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon"
            />
            <p>Amazon</p>
          </div>

          <div className="recruiter-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/3840px-Infosys_logo.svg.png"
              alt="Infosys"
            />
            <p>Infosys</p>
          </div>

          <div className="recruiter-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/960px-Tata_Consultancy_Services_old_logo.svg.png"
              alt="TCS"
            />
            <p>TCS</p>
          </div>

          <div className="recruiter-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEK6erFSVxPh0m4kLhLUO-fpX9jNF3nw1MdQ&s"
              alt="HCL"
            />
            <p>HCL</p>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="section">
        <h2>💬 Student Testimonials</h2>
        <div className="stats">
          <div className="stat-box">
            <p>"Best decision of my life!"</p>
            <strong>- Rahul, CSE</strong>
          </div>
          <div className="stat-box">
            <p>"Excellent faculty & placements."</p>
            <strong>- Priya, IT</strong>
          </div>
          <div className="stat-box">
            <p>"Amazing campus life."</p>
            <strong>- Arjun, MBA</strong>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>🏞 Campus Life</h2>
        <div className="home-gallery">
          <img src="/Campus2.jpg" alt="Campus Life" />
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h2>Ready to Build Your Future?</h2>
        <p>Join Vel Tech University and transform your career today.</p>
        <Link to="/login">
          <button className="primary-btn">Apply Now</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
