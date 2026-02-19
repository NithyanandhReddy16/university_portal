import { useState, useEffect } from "react";
import { markAttendance, getAttendanceByDate } from "../../api";

function Attendance() {
  const students = ["Rahul", "Priya", "Arun", "Sneha"];
  const [attendanceByDate, setAttendanceByDate] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  // Load attendance from backend when date changes
  useEffect(() => {
    if (!selectedDate) return;
    setLoading(true);
    getAttendanceByDate(selectedDate)
      .then((res) => {
        const fetched = {};
        res.data.forEach((r) => { fetched[r.studentName] = r.status; });
        setAttendanceByDate((prev) => ({ ...prev, [selectedDate]: fetched }));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [selectedDate]);

  const currentAttendance = attendanceByDate[selectedDate] || {};

  const markLocal = (name, status) => {
    if (!selectedDate) { alert("Please select a date first!"); return; }
    setAttendanceByDate((prev) => ({
      ...prev,
      [selectedDate]: { ...(prev[selectedDate] || {}), [name]: status },
    }));
  };

  const saveAttendance = async () => {
    if (!selectedDate) { alert("Please select a date!"); return; }
    const records = Object.entries(currentAttendance).map(([studentName, status]) => ({
      studentName, status, date: selectedDate,
    }));
    if (records.length === 0) { alert("No attendance marked yet!"); return; }
    setSaving(true);
    try {
      await markAttendance({ date: selectedDate, records });
      alert("Attendance saved successfully!");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to save attendance.");
    } finally {
      setSaving(false);
    }
  };

  const totalPresent = Object.values(currentAttendance).filter((s) => s === "Present").length;
  const totalAbsent = Object.values(currentAttendance).filter((s) => s === "Absent").length;

  return (
    <div className="page">
      <h2>📋 Mark Attendance</h2>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Select Date:{" "}
          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
        </label>
      </div>

      {loading && <p>Loading attendance...</p>}

      {students.map((student) => (
        <div key={student} style={{ padding: "15px", marginBottom: "15px", borderRadius: "12px", backgroundColor: "#f4f6f9", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          <h3>{student}</h3>
          <button
            style={{ backgroundColor: currentAttendance[student] === "Present" ? "#4CAF50" : "#008CBA", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", cursor: "pointer" }}
            onClick={() => markLocal(student, "Present")}
          >
            Present
          </button>
          <button
            style={{ marginLeft: "10px", backgroundColor: currentAttendance[student] === "Absent" ? "#FF4C4C" : "#f44336", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", cursor: "pointer" }}
            onClick={() => markLocal(student, "Absent")}
          >
            Absent
          </button>
          <p style={{ marginTop: "10px" }}>Status: {currentAttendance[student] || "Not Marked"}</p>
        </div>
      ))}

      {selectedDate && (
        <div style={{ marginTop: "30px" }}>
          <h3>📅 Attendance Summary for {selectedDate}</h3>
          <p>Present: {totalPresent}</p>
          <p>Absent: {totalAbsent}</p>
          <button
            onClick={saveAttendance}
            disabled={saving}
            style={{ backgroundColor: "#007bff", color: "white", padding: "10px 25px", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "1em" }}
          >
            {saving ? "Saving..." : "💾 Save Attendance"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Attendance;
