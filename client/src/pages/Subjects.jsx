import { useState, useEffect } from 'react';

function Subjects() {
  const [subjects, setSubjects] = useState([]);
  const [formData, setFormData] = useState({ name: '', code: '', department: '' });

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    const res = await fetch('/api/subjects');
    const data = await res.json();
    setSubjects(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/subjects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    setFormData({ name: '', code: '', department: '' });
    fetchSubjects();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Subjects</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
        <input placeholder="Subject Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
        <input placeholder="Subject Code" value={formData.code} onChange={e => setFormData({...formData, code: e.target.value})} required />
        <input placeholder="Department" value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} required />
        <button type="submit">Add Subject</button>
      </form>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead><tr><th>Name</th><th>Code</th><th>Department</th></tr></thead>
        <tbody>
          {subjects.map(s => (
            <tr key={s._id}><td>{s.name}</td><td>{s.code}</td><td>{s.department}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Subjects;
