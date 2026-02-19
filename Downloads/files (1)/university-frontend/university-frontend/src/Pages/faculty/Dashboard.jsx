import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { getDashboardStats } from "../../api";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  const [stats, setStats] = useState({
    totalStudents: 0, assignmentsSubmitted: 0, pendingSubmissions: 0, presentToday: 0, absentToday: 0,
  });
  const [dayWise, setDayWise] = useState({ labels: ["Mon","Tue","Wed","Thu","Fri"], present: [0,0,0,0,0], absent: [0,0,0,0,0] });

  useEffect(() => {
    getDashboardStats()
      .then((res) => {
        const data = res.data;
        setStats({
          totalStudents: data.totalStudents,
          assignmentsSubmitted: data.assignmentsSubmitted,
          pendingSubmissions: data.pendingSubmissions,
          presentToday: data.presentToday,
          absentToday: data.absentToday,
        });
        if (data.dayWiseAttendance) {
          setDayWise({
            labels: data.dayWiseAttendance.map((d) => d.day),
            present: data.dayWiseAttendance.map((d) => d.present),
            absent: data.dayWiseAttendance.map((d) => d.absent),
          });
        }
      })
      .catch(() => {
        // Fallback to demo data
        setStats({ totalStudents: 120, assignmentsSubmitted: 95, pendingSubmissions: 25, presentToday: 100, absentToday: 20 });
        setDayWise({ labels: ["Mon","Tue","Wed","Thu","Fri"], present: [100,102,98,105,101], absent: [20,18,22,15,19] });
      });
  }, []);

  const barData = {
    labels: dayWise.labels,
    datasets: [
      { label: "Present", data: dayWise.present, backgroundColor: "#00c3ff" },
      { label: "Absent", data: dayWise.absent, backgroundColor: "#ff4d4d" },
    ],
  };

  const barOptions = { responsive: true, plugins: { legend: { position: "top" }, title: { display: true, text: "Day-wise Attendance" } } };

  return (
    <div className="page dashboard">
      <h2>📊 Faculty Dashboard</h2>
      <div className="stats">
        <div className="stat-box total"><h2>{stats.totalStudents}</h2><p>Total Students</p></div>
        <div className="stat-box submitted"><h2>{stats.assignmentsSubmitted}</h2><p>Assignments Submitted</p></div>
        <div className="stat-box pending"><h2>{stats.pendingSubmissions}</h2><p>Pending Submissions</p></div>
        <div className="stat-box present"><h2>{stats.presentToday}</h2><p>Present Today</p></div>
        <div className="stat-box absent"><h2>{stats.absentToday}</h2><p>Absent Today</p></div>
      </div>
      <div className="chart-container">
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
}

export default Dashboard;
