import { useState, useEffect } from "react";
import { getMySubmissions } from "../../api";

function Submissions() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMySubmissions()
      .then((res) => setSubmissions(res.data))
      .catch(() => setSubmissions([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="submissions-container"><p>Loading submissions...</p></div>;

  return (
    <div className="submissions-container">
      <h2>📂 Your Submissions</h2>
      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <div className="submissions-grid">
          {submissions.map((s) => (
            <div key={s.id} className="submission-card">
              <h3>{s.title}</h3>
              <p><strong>Course:</strong> {s.course}</p>
              <p><strong>Submitted On:</strong> {s.submittedOn}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span className={s.status === "Completed" ? "status-completed" : "status-pending"}>
                  {s.status}
                </span>
              </p>
              <p>
                <strong>File:</strong>{" "}
                {s.fileUrl ? (
                  <a href={`http://localhost:8080${s.fileUrl}`} target="_blank" rel="noreferrer">
                    {s.fileName}
                  </a>
                ) : s.fileName}
              </p>
              <p><strong>Grade:</strong> {s.grade || "Pending"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Submissions;
