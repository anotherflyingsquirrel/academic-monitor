import { useState, useEffect } from 'react';

function Grades() {
  const [grades, setGrades] = useState([]);
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [formData, setFormData] = useState({ studentId: '', subjectId: '', marks: '', grade: '', semester: '' });

  useEffect(() => {
    fetchGrades();
    fetch('/api/students').then(res => res.json()).then(setStudents);
    fetch('/api/subjects').then(res => res.json()).then(setSubjects);
  }, []);

  const fetchGrades = async () => {
    const res = await fetch('/api/grades');
    const data = await res.json();
    setGrades(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    setFormData({ studentId: '', subjectId: '', marks: '', grade: '', semester: '' });
    fetchGrades();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Grades</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <select value={formData.studentId} onChange={e => setFormData({...formData, studentId: e.target.value})} required>
          <option value="">Select Student</option>
          {students.map(s => <option key={s._id} value={s._id}>{s.name} ({s.rollNo})</option>)}
        </select>
        <select value={formData.subjectId} onChange={e => setFormData({...formData, subjectId: e.target.value})} required>
          <option value="">Select Subject</option>
          {subjects.map(s => <option key={s._id} value={s._id}>{s.name} ({s.code})</option>)}
        </select>
        <input type="number" placeholder="Marks" value={formData.marks} onChange={e => setFormData({...formData, marks: e.target.value})} required />
        <input placeholder="Grade (e.g., A, B+)" value={formData.grade} onChange={e => setFormData({...formData, grade: e.target.value})} required />
        <input type="number" placeholder="Semester" value={formData.semester} onChange={e => setFormData({...formData, semester: e.target.value})} required />
        <button type="submit">Add Grade</button>
      </form>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead><tr><th>Student</th><th>Subject</th><th>Marks</th><th>Grade</th><th>Semester</th></tr></thead>
        <tbody>
          {grades.map(g => (
            <tr key={g._id}>
              <td>{g.studentId?.name}</td>
              <td>{g.subjectId?.name}</td>
              <td>{g.marks}</td>
              <td>{g.grade}</td>
              <td>{g.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grades;
