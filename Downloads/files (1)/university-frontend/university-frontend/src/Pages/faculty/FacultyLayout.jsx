import { Outlet, NavLink, useNavigate } from "react-router-dom";

function FacultyLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="faculty-portal">
      {/* Sidebar / Navbar */}
      <nav className="portal-nav">
        <h2>Faculty Portal</h2>
        <ul>
          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="attendance">Attendance</NavLink>
          </li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <main className="portal-content">
        <Outlet />
      </main>
    </div>
  );
}

export default FacultyLayout;
