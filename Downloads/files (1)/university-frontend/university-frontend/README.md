# 🎓 VelTech University Portal — React Frontend

## Tech Stack
- **React 18** + **Vite**
- **React Router v6**
- **Axios** (API calls)
- **Chart.js** + **react-chartjs-2**
- **react-icons**

---

## ⚙️ Setup Instructions

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
App runs at: **http://localhost:5173**

> Make sure the Spring Boot backend is running on **http://localhost:8080**

---

## 📁 Project Structure
```
src/
├── api.js                    ← All Axios API calls
├── App.jsx                   ← Routes
├── Components/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── Pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Courses.jsx
│   ├── Login.jsx             ← JWT Login
│   ├── Register.jsx          ← NEW: Register page
│   ├── student/
│   │   ├── StudentLayout.jsx
│   │   ├── Assignments.jsx   ← File upload submission
│   │   └── Submissions.jsx   ← View submitted assignments
│   └── faculty/
│       ├── FacultyLayout.jsx
│       ├── Dashboard.jsx     ← Stats + Chart
│       └── Attendance.jsx    ← Mark & save attendance
└── routes/
    └── ProtectedRoute.jsx
```

---

## 🔗 API Integration
All API calls are in `src/api.js`. The Vite proxy forwards `/api` requests to `http://localhost:8080`.

## 👤 Demo Credentials (after registering)
Register via `/register` page with role **Student** or **Faculty**.
