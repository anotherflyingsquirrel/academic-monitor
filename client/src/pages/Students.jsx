import { useState, useEffect } from 'react';

function Students() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: '', rollNo: '', department: '', year: '' });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await fetch('/api/students');
    const data = await res.json();
    setStudents(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    setFormData({ name: '', rollNo: '', department: '', year: '' });
    fetchStudents();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Students</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
        <input placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
        <input placeholder="Roll No" value={formData.rollNo} onChange={e => setFormData({...formData, rollNo: e.target.value})} required />
        <input placeholder="Department" value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} required />
        <input type="number" placeholder="Year" value={formData.year} onChange={e => setFormData({...formData, year: e.target.value})} required />
        <button type="submit">Add Student</button>
      </form>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead><tr><th>Name</th><th>Roll No</th><th>Department</th><th>Year</th></tr></thead>
        <tbody>
          {students.map(s => (
            <tr key={s._id}><td>{s.name}</td><td>{s.rollNo}</td><td>{s.department}</td><td>{s.year}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
