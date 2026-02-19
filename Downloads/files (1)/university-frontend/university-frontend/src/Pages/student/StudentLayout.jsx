import { Outlet, NavLink, useNavigate } from "react-router-dom";

function StudentLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="student-portal">
      {/* Sidebar / Navbar */}
      <nav className="portal-nav">
        <h2>Student Portal</h2>
        <ul>
          <li>
            <NavLink to="assignments">Assignments</NavLink>
          </li>
          <li>
            <NavLink to="submissions">Submissions</NavLink>
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

export default StudentLayout;
