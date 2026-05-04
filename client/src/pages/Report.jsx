import { useState, useEffect } from 'react';

function Report() {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    fetch('/api/reports/summary')
      .then(res => res.json())
      .then(setReportData)
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Academic Report Summary</h1>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Subject Code</th>
            <th>Average Marks</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((item, index) => (
            <tr key={index}>
              <td>{item.subjectName}</td>
              <td>{item.subjectCode}</td>
              <td>{item.averageMarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Report;
