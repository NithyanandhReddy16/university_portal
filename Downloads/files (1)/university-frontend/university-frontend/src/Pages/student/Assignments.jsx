import { useState, useEffect } from "react";
import { getAssignments, submitAssignment } from "../../api";

function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [files, setFiles] = useState({});
  const [submitting, setSubmitting] = useState({});

  useEffect(() => {
    getAssignments()
      .then((res) => setAssignments(res.data))
      .catch(() => {
        // Fallback demo data if API not ready
        setAssignments([
          { id: 1, title: "Programming using C", course: "Programming using C", dueDate: "2026-02-28" },
          { id: 2, title: "Oops using Java", course: "Oops using Java", dueDate: "2026-03-05" },
          { id: 3, title: "Python Programming", course: "Python Programming", dueDate: "2026-03-10" },
        ]);
      });
  }, []);

  const handleFileChange = (e, id) => setFiles({ ...files, [id]: e.target.files[0] });

  const handleSubmit = async (id) => {
    if (!files[id]) { alert("Please select a file before submitting!"); return; }
    setSubmitting({ ...submitting, [id]: true });
    try {
      const formData = new FormData();
      formData.append("file", files[id]);
      await submitAssignment(id, formData);
      alert("Assignment submitted successfully!");
    } catch (err) {
      alert(err.response?.data?.message || "Submission failed. Try again.");
    } finally {
      setSubmitting({ ...submitting, [id]: false });
    }
  };

  return (
    <div className="assignments-container">
      <h2>📝 Assignments</h2>
      <div className="assignment-list">
        {assignments.map((a) => (
          <div key={a.id} className="assignment-card">
            <div className="assignment-header">
              <h3>{a.title}</h3>
              <span className="due-date">Due: {a.dueDate}</span>
            </div>
            <p>Course: {a.course}</p>
            <input type="file" onChange={(e) => handleFileChange(e, a.id)} />
            <button onClick={() => handleSubmit(a.id)} disabled={submitting[a.id]}>
              {submitting[a.id] ? "Submitting..." : "Submit"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assignments;
