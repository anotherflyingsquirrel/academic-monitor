import { useState, useEffect } from 'react';

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    fetch('/api/students').then(res => res.json()).then(setStudents);
    fetch('/api/subjects').then(res => res.json()).then(setSubjects);
    fetch('/api/grades').then(res => res.json()).then(setGrades);
  }, []);

  const totalMarks = grades.reduce((acc, grade) => acc + grade.marks, 0);
  const averageMarks = grades.length > 0 ? (totalMarks / grades.length).toFixed(2) : 0;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h3>Total Students</h3>
          <p>{students.length}</p>
        </div>
        <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h3>Total Subjects</h3>
          <p>{subjects.length}</p>
        </div>
        <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h3>Average Marks</h3>
          <p>{averageMarks}</p>
        </div>
      </div>
      <h2>Recent Grades</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Student</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>
          {grades.slice(-5).reverse().map(grade => (
            <tr key={grade._id}>
              <td>{grade.studentId?.name}</td>
              <td>{grade.subjectId?.name}</td>
              <td>{grade.marks}</td>
              <td>{grade.grade}</td>
              <td>{grade.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
