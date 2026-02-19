import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import StudentLayout from "./Pages/student/StudentLayout";
import Assignments from "./Pages/student/Assignments";
import Submissions from "./Pages/student/Submissions";

import FacultyLayout from "./Pages/faculty/FacultyLayout";
import Dashboard from "./Pages/faculty/Dashboard";
import Attendance from "./Pages/faculty/Attendance";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Student Routes */}
        <Route path="/student" element={<ProtectedRoute role="STUDENT"><StudentLayout /></ProtectedRoute>}>
          <Route index element={<Navigate to="assignments" />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="submissions" element={<Submissions />} />
        </Route>

        {/* Faculty Routes */}
        <Route path="/faculty" element={<ProtectedRoute role="FACULTY"><FacultyLayout /></ProtectedRoute>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="attendance" element={<Attendance />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
